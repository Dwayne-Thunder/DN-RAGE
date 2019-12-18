let mysql = require('../modules/mysql');
let methods = require('../modules/methods');
let user = require('../user');

let weather = exports;

let _year = 2012;
let _month = 1;
let _day = 1;
let _hour = 12;
let _minute = 0;
let _tempNew = 27;
let _weatherType = 0;
let _weather = "";

weather.loadAll = function() {
    methods.debug('weather.loadAll');
    mysql.executeQuery(`SELECT * FROM daynight WHERE id = 1`, function (err, rows, fields) {

        _year = rows[0]["year"];
        _month = rows[0]["month"];
        _day = rows[0]["day"];
        _hour = rows[0]["hour"];
        _minute = rows[0]["minute"];

        methods.debug('WEATHER', rows[0]);

        weather.load();
    });
};

weather.load = function() {
    methods.debug('weather.load');
    if (_month < 2 || _month > 11) //Зима
    {
        _tempNew = methods.getRandomInt(1, 4) * -1;
        _weatherType = 0;
    }
    else if (_month == 2) //Зима
    {
        _tempNew = methods.getRandomInt(0, 4) + 8;
        _weatherType = 0;
    }
    else if (_month >= 3 && _month <= 5) //Весна
    {
        _tempNew = methods.getRandomInt(0, 4) + 16;
        _weatherType = 1;
    }
    else if (_month >= 6 && _month <= 9) //Лето
    {
        _tempNew = methods.getRandomInt(0, 4) + 25;
        _weatherType = 2;
    }
    else //Осень
    {
        _tempNew = methods.getRandomInt(0, 4) + 16;
        _weatherType = 3;
    }

    weather.randomTimer();
    weather.weatherTimer();
    weather.timeSyncTimer();
    weather.saveTimer();
};

weather.saveTimer = function() {
    methods.debug('weather.saveTimer');
    mysql.executeQuery("UPDATE daynight SET  year = '" + _year + "', month = '" + _month + "', day = '" + _day + "', hour = '" + _hour + "', minute = '" + _minute + "' where id = '1'");
    setTimeout(weather.saveTimer, 5 * 60 * 1000);
};

weather.randomTimer = function() {
    methods.debug('weather.randomTimer');
    weather.nextRandomWeather();
    setTimeout(weather.randomTimer, 1000 * 60 * 10 + methods.getRandomInt(5, 35));
};

weather.weatherTimer = function() {
    methods.debug('weather.weatherTimer');
    switch (_weatherType)
    {
        case 0:
            if (_hour > 1 && _hour <= 6)
                _tempNew = _tempNew - (methods.getRandomFloat() + 2);
            else if (_hour > 6 && _hour <= 12)
                _tempNew = _tempNew + methods.getRandomFloat();
            else if (_hour > 12 && _hour <= 16)
                _tempNew = _tempNew + (methods.getRandomFloat() + 1);
            else if (_hour > 16 && _hour <= 20)
                _tempNew = _tempNew + methods.getRandomFloat();
            else if (_hour > 20 && _hour <= 23)
                _tempNew = _tempNew + methods.getRandomFloat();
            else
                _tempNew = _tempNew - methods.getRandomFloat() - 0.3;
            break;
        case 1:
        case 2:
        case 3:
            if (_hour > 1 && _hour <= 6)
                _tempNew = _tempNew - (methods.getRandomFloat() + 1.2);
            else if (_hour > 6 && _hour <= 12)
                _tempNew = _tempNew + methods.getRandomFloat();
            else if (_hour > 12 && _hour <= 16)
                _tempNew = _tempNew + (methods.getRandomFloat() + 1);
            else if (_hour > 16 && _hour <= 20)
                _tempNew = _tempNew + methods.getRandomFloat();
            else if (_hour > 20 && _hour <= 23)
                _tempNew = _tempNew + methods.getRandomFloat();
            else
                _tempNew = _tempNew - methods.getRandomFloat() - 0.1;
            break;
    }

    setTimeout(weather.weatherTimer, 30 * 60 * 1000);
};

weather.timeSyncTimer = function() {
    methods.debug('weather.timeSyncTimer');

    try {
        _minute++;
        if (_minute > 59)
        {
            _minute = 0;
            _hour++;

            mp.players.forEach(function (player) {
                user.payDay(player).then();
            });

            if (_hour > 23)
            {
                _hour = 0;
                _day++;

                if (_day > methods.daysInMonth(_year, _month))
                {
                    _day = 1;
                    _month++;

                    if (_month > 12)
                    {
                        _month = 1;
                        _year++;
                    }
                }
            }
        }

        let dateTime = new Date();
        mp.players.call("client:managers:weather:syncDateTime", [_minute, _hour, _day, _month, _year]);
        mp.players.call("client:managers:weather:syncRealTime", [dateTime.getHours()]);
        mp.players.call("client:managers:weather:syncWeatherTemp", [Math.round(_tempNew)]);
        mp.players.call("client:managers:weather:syncRealFullDateTime", [`${methods.digitFormat(dateTime.getDate())}/${methods.digitFormat(dateTime.getMonth()+1)} ${methods.digitFormat(dateTime.getHours())}:${methods.digitFormat(dateTime.getMinutes())}`]);

        /*if (dateTime.getHours() == 18 && dateTime.getMinutes() == 1) { //TODO
            if (isVip < 1) {
                let playerRandomList = [];
                mp.players.forEach(p => {
                    if (user.isLogin(p) && user.getVipStatus(p) == "none")
                        playerRandomList.push(p);
                });

                try {
                    let randomPlayer = playerRandomList[methods.getRandomInt(0, playerRandomList.length - 1)];
                    methods.notifyToAll('~b~Результаты розыгрыша VIP LIGHT навсегда');
                    methods.notifyToAll('~b~Поздравляем! Победил: ~s~' + user.getRpName(randomPlayer));
                    user.set(randomPlayer, 'vip_status', 'Light');
                    user.set(randomPlayer, 'vip_time', 9999);
                    user.saveAccount(randomPlayer);
                    isVip++;
                }
                catch (e) {
                    methods.debug(e);
                }
            }
        }*/

        if (dateTime.getHours() == 4 && dateTime.getMinutes() == 50)
            methods.notifyToAll('Рестарт сервера через 15 минут');
        if (dateTime.getHours() == 4 && dateTime.getMinutes() == 59)
            methods.notifyToAll('Рестарт сервера через 5 минут');
        if (dateTime.getHours() == 5 && dateTime.getMinutes() == 2)
            methods.saveAll();
        if (dateTime.getHours() == 5 && dateTime.getMinutes() == 3)
        {
            mp.players.forEach(function (p) {
                if (mp.players.exists(p))
                    user.kick(p, 'Рестарт');
            })
        }
    } catch (e) {
        methods.debug(e);
    }
    setTimeout(weather.timeSyncTimer, 8500);
};

weather.setWeather = function(weatherName) {
    methods.debug('weather.setWeather');

    methods.debug('CURRENT WEATHER: ' + weatherName);
    if (weatherName == "RAIN" || weatherName == "THUNDER" || weatherName == "CLEARING")
    {
        if (methods.getRandomInt(0, 3) == 0)
            weather.nextRandomWeather();
    }
    _weather = weatherName;
};

weather.getRpDateTime = function() {
    methods.debug('weather.getRpDateTime');
    return `${methods.digitFormat(_hour)}:${methods.digitFormat(_minute)}, ${methods.digitFormat(_day)}/${methods.digitFormat(_month)}/${_year}`;
};

weather.setPlayerCurrentWeather = function(player) {
    methods.debug('weather.setPlayerCurrentWeather');
    player.call("client:managers:weather:setCurrentWeather", [weather.getWeather()]);
};

weather.getWeather = function() {
    methods.debug('weather.getWeather');
    return _weather;
};

weather.getWeatherType = function() {
    methods.debug('weather.getWeatherType');
    return _weatherType;
};

weather.getHour = function() {
    methods.debug('weather.getHour');
    return _hour;
};

weather.getMin = function() {
    methods.debug('weather.getMin');
    return _minute;
};

weather.getDay = function() {
    methods.debug('weather.getDay');
    return _day;
};

weather.getMonth = function() {
    methods.debug('weather.getMonth');
    return _month;
};

weather.nextRandomWeather = function() {
    methods.debug('weather.nextRandomWeather');
    weather.nextRandomWeatherByType(weather.getWeatherType());
};

weather.getWeatherName = function(type) {
    switch (type) {
        case "EXTRASUNNY":
        case "CLEAR":
            return 'Солнечно';
        case "CLOUDS":
            return 'Облачно';
        case "SMOG":
            return 'Смог';
        case "FOGGY":
            return 'Туман';
        case "OVERCAST":
            return 'Пасмурно';
        case "RAIN":
            return 'Дождь';
        case "THUNDER":
            return 'Гроза';
        case "CLEARING":
            return 'Лёгкий дождь';
        case "XMAS":
            return 'Снег';
    }
    return 'Солнечно';
};

weather.getFullRpTime = function() {
    return `${methods.digitFormat(_hour)}:${methods.digitFormat(_minute)}`;
};

weather.nextRandomWeatherByType = function(weatherType) {
    methods.debug('weather.nextRandomWeatherByType');

    var weatherList = [
        "EXTRASUNNY",
        "CLEAR",
        "CLOUDS",
        "SMOG",
        "FOGGY",
        "OVERCAST",
        "RAIN",
        "THUNDER",
        "CLEARING",
        "XMAS"
    ];

    switch (weatherType)
    {
        case 0:

            weatherList = [
                "EXTRASUNNY",
                "CLOUDS",
                "CLOUDS",
                "SMOG",
                "SMOG",
                "FOGGY",
                "FOGGY",
                "OVERCAST",
                "OVERCAST"
            ];

            if (weatherType == 0)
                if (_tempNew < 1)
                    weatherList = ["XMAS"];

            break;
        case 1:
            weatherList = [
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "SMOG",
                "SMOG",
                "SMOG",
                "FOGGY",
                "FOGGY",
                "FOGGY",
                "OVERCAST",
                "OVERCAST",
                "OVERCAST",
                "CLEARING"
            ];
            break;
        case 3:
            weatherList = [
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "SMOG",
                "SMOG",
                "SMOG",
                "FOGGY",
                "FOGGY",
                "FOGGY",
                "OVERCAST",
                "OVERCAST",
                "OVERCAST",
                "RAIN",
                "THUNDER",
                "CLEARING"
            ];
            break;
        case 2:
            weatherList = [
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "EXTRASUNNY",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLEAR",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "CLOUDS",
                "SMOG",
                "SMOG",
                "SMOG",
                "FOGGY",
                "FOGGY",
                "FOGGY",
                "OVERCAST",
                "OVERCAST",
                "OVERCAST",
                "CLEARING"
            ];
            break;
    }

    weather.setWeather(weatherList[methods.getRandomInt(0, weatherList.length)]);

    if (_hour > 4 && _hour < 7)
    {
        switch (weather.getWeather())
        {
            case "EXTRASUNNY":
            case "CLEAR":
            case "CLOUDS":
                weather.setWeather("FOGGY");
                break;
        }
    }

    if (_hour > 20)
    {
        switch (weather.getWeather())
        {
            case "EXTRASUNNY":
            case "CLEAR":
            case "CLOUDS":
                weather.setWeather("SMOG");
                break;
        }
    }

    methods.notifyWithPictureToAll(`Life Invader [${weather.getFullRpTime()}]`, "~y~Новости погоды", `~y~${weather.getWeatherName(weather.getWeather())}~s~\nТемпература воздуха: ~y~${Math.round(_tempNew)}°C`, "CHAR_LIFEINVADER", 1);
    mp.players.call('client:managers:weather:nextWeather', [weather.getWeather(), methods.getRandomInt(100, 240)]);
};