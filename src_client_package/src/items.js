import methods from "./modules/methods";
import weapons from "./weapons";

let items = {};

items.defaultModelHash = 1108364521;
items.recipes = [
    {
        id: 0, name: "Большая аптечка", desc: `Данная аптечка восстанавливает до 100% здоровья.~br~Ресурсы для создания: бинт 2шт, маленькая аптечка`,
        craft: ['215', '216', '216'], craft_time: 5000
    },
    {
        id: 1, name: "Малая аптечка", desc: `Данная аптечка восстанавливает до 60% здоровья.~br~Ресурсы для создания: бинт 3шт`,
        craft: ['216', '216', '216'], craft_time: 5000
    },
    {
        id: 2, name: "Бинт (2шт)", desc: `Ресурсы для создания: Ткань`,
        craft: ['475'], craft_time: 5000
    },
    {
        id: 3, name: "Улучшенная удочка", desc: `Возможность ловить редкую рыбу.~br~Ресурсы для создания: Плотная леска, Улучшенный крючок, Удочка`,
        craft: ['478', '479', '251'], craft_time: 5000
    },
    {
        id: 4, name: "Костёр", desc: `Ресурсы для создания: Дрова, Зажигалка`,
        craft: ['482', '484'], craft_time: 5000
    },
    {
        id: 5, name: "Бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина`,
        craft: ['475', '475', '476'], craft_time: 5000
    },
    {
        id: 6, name: "Камуфляжный бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 7, name: "Зел. камуфляжный бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 8, name: "Зелёный бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 9, name: "Оранжевый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 10, name: "Фиолетовый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 11, name: "Розовый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 12, name: "Красный бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 13, name: "Синий бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 14, name: "Серый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 15, name: "Бежевый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 16, name: "Белый бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 17, name: "Чёрный бронежилет", desc: `Ресурсы для создания: Ткань 2шт, стальная пластина, баллончик с краской`,
        craft: ['475', '475', '476', '477'], craft_time: 5000
    },
    {
        id: 18, name: "Raging Bull Mk II", desc: `Ресурсы для создания: Raging Bull 2шт, Стальная пластина 4шт`,
        craft: ['476', '476', '476', '476', '74', '74'], craft_time: 10000
    },
];

items.craftSuccess = [
    278, //0 - Большая атпечка
    215, //1 - Малая аптечка
    216, //2 - Бинт (2шт)
    251, //3 - Улучшенная удочка
    483, //4 - Костёр
    252, //5 - Бронежилет
    252, //6 - Бронежилет
    252, //7 - Бронежилет
    252, //8 - Бронежилет
    252, //9 - Бронежилет
    252, //10 - Бронежилет
    252, //11 - Бронежилет
    252, //12 - Бронежилет
    252, //13 - Бронежилет
    252, //14 - Бронежилет
    252, //15 - Бронежилет
    252, //16 - Бронежилет
    252, //17 - Бронежилет
    75, //18 - Ревик мк2
];

/*Имя, хеш объекта, может экипировать, вес, объем (ширина * на длинну * на высоту) */
let ItemList = [];

items.updateItems = function(data)
{
    ItemList = data;
};

items.isWeapon = function(itemId) {
    return itemId >= 54 && itemId <= 138 || itemId == 146 || itemId == 147;
};

items.isAmmo = function(itemId) {
    return itemId >= 279 && itemId <= 292;
};

items.getItemFormat = function(item) {
    let params = {};

    try {
        params = JSON.parse(item.params);
    }
    catch (e) {
        methods.debug(e);
    }

    let itemName = items.getItemNameById(item.item_id);
    let desc = "";

    if (item.label.toString() != "" && item.item_id >= 265 && item.item_id <= 273)
        itemName = item.label;
    else if (item.label.toString() != "" && item.item_id === 251)
        itemName = item.label;
    else if (item.label.toString() != "")
        desc += item.label;

    if (item.item_id === 140 || item.item_id === 141)
        desc = `В пачке: ${methods.moneyFormat(item.count)}`;
    if (item.item_id === 49)
        desc = `${params.desc}`;
    if (item.item_id === 474)
        desc = `${items.recipes[params.id].name}`;

    if (items.isWeapon(item.item_id)) {

        let wpName = items.getItemNameHashById(item.item_id);
        itemName = items.getItemNameById(item.item_id);

        try {
            if (params.superTint && params.superTint != 0)
                itemName = itemName + ' ' + weapons.getWeaponComponentName(wpName, params.superTint);
            else if (params.tint && params.tint != 0)
                itemName = itemName + ' ' + weapons.getTintName(wpName, params.tint);
        }
        catch (e) {
            methods.debug(e);
        }
        let count = 100;
        if (item.count >= 0)
            count = item.count;
        desc = `${params.serial} | ${count}%`;
    }
    else if (item.item_id <= 292 && item.item_id >= 279) {
        if (methods.parseInt(item.count) == 0)
            desc = "Пустая";
        else
            desc = `Количество патрон: ${item.count}шт.`;
    }
    else if (item.item_id <= 273 && item.item_id >= 265) {
        itemName = params.name;
        desc = params.sex === 1 ? 'Женская одежда' : 'Мужская одежда';
    }
    else if (item.item_id === 274 || item.item_id === 266) {
        itemName = params.name;
        if (params.desc)
            desc = 'Редкость: ' + params.desc;
    }
    else if (item.item_id === 252) {
        itemName = params.name;
        desc = `Прочность: ${item.count}%`;
    }
    else if (item.item_id <= 473 && item.item_id >= 293) {
        desc = 'Используется для: ' + items.getWeaponNameByName(items.getItemNameHashById(item.item_id));
    }
    else if (item.item_id <= 536 && item.item_id >= 487) {
        desc = 'Вес: ' + items.getItemWeightById(item.item_id) + 'гр.';
    }
    else if (item.item_id == 50) {
        itemName = items.getItemNameById(item.item_id);
        desc = methods.bankFormat(params.number);
    }
    else if (item.item_id <= 30 && item.item_id >= 27) {
        itemName = items.getItemNameById(item.item_id);
        desc = methods.phoneFormat(params.number);
    }
    return {desc: desc, name: itemName};
};

items.getAmmoCount = function(itemId) {
    switch (itemId) {
        case 279:
        case 288:
        case 290:
            return 10;
        case 280:
            return 140;
        case 281:
            return 120;
        case 282:
            return 130;
        case 283:
        case 284:
            return 260;
        case 285:
        case 286:
        case 287:
            return 60;
        case 289:
        case 291:
        case 292:
            return 1;
    }
    return 10;
};

items.getWeaponIdByName = function(name)
{
    let id = -1;
    ItemList.forEach((item, i) => {
        if (item[1] == name && item[2] == 0)
            id = i;
    });
    return id;
};

items.getWeaponComponentIdByHash = function(hash, wpName)
{
    let id = -1;
    ItemList.forEach((item, i) => {
        if (item[2] == hash && item[1] == wpName)
            id = i;
    });
    return id;
};

items.getWeaponNameByName = function(name)
{
    let normalName = "";
    ItemList.forEach((item, i) => {
        if (item[1] == name && item[2] == 0)
            normalName = item[0];
    });
    return normalName;
};

items.getItemNameById = function(id)
{
    try
    {
        return ItemList[id][0];
    }
    catch
    {
        return "UNKNOWN";
    }
};

items.getItemNameHashById = function(id)
{
    try
    {
        return ItemList[id][1];
    }
    catch
    {
        return "UNKNOWN";
    }
};

items.getItemPrice = function(id) {
    try
    {
        return ItemList[id][6];
    }
    catch
    {
        return 0;
    }
};

items.getItemHashModiferById = function(id)
{
    try
    {
        return ItemList[id][2];
    }
    catch
    {
        return "UNKNOWN";
    }
};

items.getItemHashById = function(id)
{
    try
    {
        return ItemList[id][3];
    }
    catch
    {
        return 1108364521;
    }
};

items.getItemWeightById = function(id)
{
    try
    {
        return ItemList[id][4];
    }
    catch
    {
        return -1;
    }
};

items.getItemWeightKgById = function(id)
{
    try
    {
        return Math.Round(ItemList[id][4] / 1000.0);
    }
    catch
    {
        return -1;
    }
};

items.getItemAmountById = function(id)
{
    try
    {
        return ItemList[id][5];
    }
    catch
    {
        return -1;
    }
};

export default items;