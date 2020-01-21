import methods from "./modules/methods";

let enums = {};

enums.clothM = [];
enums.propM = [];
enums.clothF = [];
enums.propF = [];
enums.shopList = [];
enums.overlays = [];
enums.tprint = [];
enums.tattooList = [];
enums.vehicleInfo = [];

enums.get = function(_enum){
    switch (_enum) {
        case 'clothM': return enums.clothM;
        case 'propM': return enums.propM;
        case 'clothF': return enums.clothF;
        case 'propF': return enums.propF;
        case 'shopList': return enums.shopList;
        case 'vehicleInfo': return enums.vehicleInfo;
        case 'overlays': return enums.overlays;
        case 'printList': return enums.tprint;
        case 'tattooList': return enums.tattooList;
        case 'fractionList': return enums.fractionListId;
        default: return undefined;
    }
};

let currentRequestID = 0;
let pendingRequests = {};

// должно быть тут, иначе никак
mp.events.add('client:enums:updateCloth', (requestID, overlays, clothM, clothF, propM, propF) => {
    try {
        if (pendingRequests[requestID]) {
            pendingRequests[requestID]([overlays, clothM, clothF, propM, propF]);
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
});

// должно быть тут, иначе никак
mp.events.add('client:enums:updateCloth1', (requestID, tattooList, printList, fractionList) => {
    try {
        /*mp.gui.chat.push(clothM);
        mp.gui.chat.push(propM);
        mp.gui.chat.push(clothF);
        mp.gui.chat.push(propF);
        mp.gui.chat.push(shopList);*/ // работает
        if (pendingRequests[requestID]) {
            pendingRequests[requestID]([tattooList, printList, fractionList]);
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
});

let updateCloth = function() {
    return new Promise((resolve) => {
        pendingRequests[currentRequestID] = resolve;
        mp.events.callRemote('server:enums:getCloth', currentRequestID);
        currentRequestID++;
    });
};

let updateTattoo = function() {
    return new Promise((resolve) => {
        pendingRequests[currentRequestID] = resolve;
        mp.events.callRemote('server:enums:getCloth1', currentRequestID);
        currentRequestID++;
    });
};

enums.resetVehicleInfo = function() {
    enums.vehicleInfo = [];
};

enums.updateVehicleInfo = function(idx, data) {
    if (idx == 0)
        enums.vehicleInfo = [];
    enums.vehicleInfo = enums.vehicleInfo.concat(data);
};

enums.kitchenIntData = [[349.8293,-932.1685,45.36568,20000],[-1909.91,-575.0604,18.09722,20000],[-1282.89,446.3326,96.89471,20000],[-1153.151,-1521.806,9.642298,20000],[-897.9225,-441.7401,93.05853,20000],[-852.9263,688.3412,151.8529,20000],[-782.1923,330.5791,186.3132,20000],[-758.5352,610.5003,143.1406,20000],[-674.4797,595.6437,144.3797,20000],[-618.301,42.6407,96.60004,20000],[-566.1242,656.9935,144.832,20000],[-111.3519,-6.549356,69.51958,20000],[-10.52031,-1428.414,30.10148,20000],[124.1809,557.1547,183.2971,20000],[265.3231,-995.9853,-100.0086,20000],[343.0825,429.4016,148.3808,20000],[343.7529,-1002.998,-100.1962,20000],[379.4201,418.8586,144.9001,20000],[1395.23,1145.007,113.3336,20000],[1975.355,3818.645,32.43632,20000],[-9.682148,520.001,173.628,30000],[-797.776,187.5312,71.60544,30000],[-1440.387,6759.043,7.98046,30000],[-769.8837,340.0439,210.397,20000],[-787.7949,330.3934,157.599,20000],[-782.215,329.8719,216.0382,20000],[-778.6613,327.9729,195.086,20000],[-1459.873,-534.1923,54.52639,20000],[-1473.994,-537.3419,72.44417,20000],[-31.02146,-587.9935,87.71225,20000],[-11.44843,-584.9959,78.43073,20000],[-896.725,-446.5864,124.1319,20000],[-912.0232,-371.7621,83.07791,20000],[-917.9376,-379.2882,107.0377,20000],[-918.7728,-386.1582,112.6746,20000],[-468.6447,-695.6874,74.68432,20000],[120.4625,-884.7316,123.2703,20000],[-674.1874,-858.9833,40.64307,20000],[-440.8985,6274.877,10.75166,20000],[-57.75088,-620.3068,75.99939,20000],[930.5132,-548.4226,42.63166,20000]];
enums.dispatchItemList = [];

enums.spawnByRole = [
    [-332.417, -2792.682, 4.000233, 91.04308],
    [-1042.025, -2744.718, 20.3594, 327.3454],
    [2046.785, 3566.849, 39.19671, 243.1456],
];

enums.screenEffectList = [
    'BeastIntroScene','BeastLaunch','BeastTransition','BikerFilter','BikerFilterOut','BikerFormation','BikerFormationOut','CamPushInFranklin','CamPushInMichael','CamPushInNeutral','CamPushInTrevor','ChopVision','CrossLine','CrossLineOut','DeadlineNeon','DeathFailFranklinIn','DeathFailMichaelIn','DeathFailMPDark','DeathFailMPIn','DeathFailNeutralIn','DeathFailOut','DeathFailTrevorIn','DefaultFlash','DMT_flight','DMT_flight_intro','Dont_tazeme_bro','DrugsDrivingIn','DrugsDrivingOut','DrugsMichaelAliensFight','DrugsMichaelAliensFightIn','DrugsMichaelAliensFightOut','DrugsTrevorClownsFight','DrugsTrevorClownsFightIn','DrugsTrevorClownsFightOut','ExplosionJosh3','FocusIn','FocusOut','HeistCelebEnd','HeistCelebPass','HeistCelebPassBW','HeistCelebToast','HeistLocate','HeistTripSkipFade','InchOrange','InchOrangeOut','InchPickup','InchPickupOut','InchPurple','InchPurpleOut','LostTimeDay','LostTimeNight','MenuMGHeistIn','MenuMGHeistIntro','MenuMGHeistOut','MenuMGHeistTint','MenuMGIn','MenuMGSelectionIn','MenuMGSelectionTint','MenuMGTournamentIn','MenuMGTournamentTint','MinigameEndFranklin','MinigameEndMichael','MinigameEndNeutral','MinigameEndTrevor','MinigameTransitionIn','MinigameTransitionOut','MP_Bull_tost','MP_Bull_tost_Out','MP_Celeb_Lose','MP_Celeb_Lose_Out','MP_Celeb_Preload','MP_Celeb_Preload_Fade','MP_Celeb_Win','MP_Celeb_Win_Out','MP_corona_switch','MP_intro_logo','MP_job_load','MP_Killstreak','MP_Killstreak_Out','MP_Loser_Streak_Out','MP_OrbitalCannon','MP_Powerplay','MP_Powerplay_Out','MP_race_crash','MP_SmugglerCheckpoint','MP_TransformRaceFlash','MP_WarpCheckpoint','PauseMenuOut','pennedIn','PennedInOut','PeyoteEndIn','PeyoteEndOut','PeyoteIn','PeyoteOut','PPFilter','PPFilterOut','PPGreen','PPGreenOut','PPOrange','PPOrangeOut','PPPink','PPPinkOut','PPPurple','PPPurpleOut','RaceTurbo','Rampage','RampageOut','SniperOverlay','SuccessFranklin','SuccessMichael','SuccessNeutral','SuccessTrevor','switch_cam_1','switch_cam_2','SwitchHUDFranklinIn','SwitchHUDFranklinOut','SwitchHUDIn','SwitchHUDMichaelIn','SwitchHUDMichaelOut','SwitchHUDOut','SwitchHUDTrevorIn','SwitchHUDTrevorOut','SwitchOpenFranklin','SwitchOpenFranklinIn','SwitchOpenFranklinOut','SwitchOpenMichaelIn','SwitchOpenMichaelMid','SwitchOpenMichaelOut','SwitchOpenNeutralFIB5','SwitchOpenNeutralOutHeist','SwitchOpenTrevorIn','SwitchOpenTrevorOut','SwitchSceneFranklin','SwitchSceneMichael','SwitchSceneNeutral','SwitchSceneTrevor','SwitchShortFranklinIn','SwitchShortFranklinMid','SwitchShortMichaelIn','SwitchShortMichaelMid','SwitchShortNeutralIn','SwitchShortNeutralMid','SwitchShortTrevorIn','SwitchShortTrevorMid','TinyRacerGreen','TinyRacerGreenOut','TinyRacerIntroCam','TinyRacerPink','TinyRacerPinkOut','WeaponUpgrade'
];

enums.fractionArsenalItems = [
    [], //0
    [40, 79], //1 GOV
    [], //2 SAPD
    [], //3 FIB
    [], //4 USMC
    [], //5 SHERIFF
    [], //6 EMS
    [], //7 NEWS
];

enums.gunShopItems = [
    54, 63, 64, 65, 69, 77, 71, 87, 90, 91, 94, 103, 106, 113, 114, 112, 108,
    280, 281, 282, 283, 284, 285, 286, 287,
];

enums.lscClassPrice = [
    ['Commercials', 1.2],
    ['Compacts', 1],
    ['Coupes', 1.5],
    ['Industrial', 1.6],
    ['Motorcycles', 1.2],
    ['Muscle', 5],
    ['Off-Road', 1.5],
    ['Sedans', 2],
    ['Sports', 5],
    ['Sports Classics', 8],
    ['Super', 10],
    ['SUVs', 3],
    ['Utility', 1],
    ['Vans', 2],
];

enums.lscNames = [
    ['Спойлер', 750],
    ['Передний бампер', 1000],
    ['Задний бампер', 1000],
    ['Боковые юбки', 925],
    ['Выхлопная труба', 810],
    ['Внутренняя рама', 600],
    ['Решетка радиатора', 450],
    ['Капот', 1100],
    ['Крылья', 650],
    ['Крылья-2', 650],
    ['Крыша', 1000],
    ['Двигатель', 750],
    ['Тормозная система', 1000],
    ['Трансмиссия', 1500],
    ['Гудок', 59000],
    ['Высота подвески', 1600],
    ['Броня', 0],
    ['17', 0],
    ['Турбо', 12500],
    ['19', 0],
    ['20', 0],
    ['21', 0],
    ['Ксенон', 750],
    ['Колёса', 2000],
    ['Заднее колесо', 1250],
    ['Номерной знак', 500],
    ['Решетка радиатора', 350],
    ['Лобовое стекло', 2500],
    ['Украшения', 1000],
    ['Интерьер салона', 1000],
    ['Циферблат', 350],
    ['Обшивка', 500],
    ['Сиденья', 650],
    ['Руль', 500],
    ['Рычаг переключателя', 250],
    ['Бляшки', 350],
    ['Акустика', 1500],
    ['37', 0],
    ['Гидравлика', 10000],
    ['Блок двигателя', 1350],
    ['Воздушный фильтр', 550],
    ['41', 0],
    ['Крышка', 0],
    ['Замки на капот', 1100],
    ['Крыша', 750],
    ['45', 0],
    ['Дефлектор', 1000],
    ['47', 0],
    ['Винилл', 7500],
    ['49', 0],
    ['50', 0],
    ['51', 0],
    ['52', 0],
    ['53', 0],
    ['Высота подвески', 0],
    ['55', 0],
    ['56', 0],
    ['57', 0],
    ['58', 0],
    ['59', 0],
    ['60', 0],
    ['61', 0],
    ['Колёса', 0],
    ['63', 0],
    ['64', 0],
    ['65', 0],
    ['66', 0],
    ['67', 0],
    ['68', 0],
    ['Тонировка', 2500],
    ['70', 0],
    ['71', 0],
    ['72', 0],
    ['73', 0],
    ['Цвет приборной панели', 1000],
    ['Цвет отделки', 2500],
    ['Специальная окраска', 5000],
    ['Тип колёс', 0],
    ['Тип колёс', 1000],
    ['Крутящий момент', 5000],
];

enums.lscSNames = [
    ['Привод', 1000],
    ['Ускорение', 100000],
    ['Мощность Двигателя', 150000],
    ['Сила торможения', 50],
    ['Распределение силы торм.', 50],
    ['Ручной тормоз', 50],
    ['Угол поворота колёс', 200],
    ['Сцепление колес на повороте', 50],
    ['Пробуксовка колес', 50],
];

enums.lscColors = [
    'Черный',
    'Графитно-черный',
    'Черная сталь',
    'Темно-серебряный',
    'Серебряный',
    'Серебряный с голубым оттенком',
    'Серая сталь',
    'Темно-серебряный',
    'Каменно-серябряный',
    'Темно-серебряный',
    'Темно-серый',
    'Антрацитово‐серый',
    'Матовый черный',
    'Матовый Серый',
    'Матовый светло-серый',
    'Глянцево-черный',
    'Глянцево-черный',
    'Глянцевый темно-серебряный',
    'Глянцево-серебряный',
    'Глянцевый темно-серебряный',
    'Глянцевый темно-голубой',
    'Светлый матово-черный',
    'Матово-графитовый',
    'Матовый серебряно-серый',
    'Матовой серебряный',
    'Матовый серебряно-голубой',
    'Матовый темно-голубой',
    'Красный',
    'Насыщенный красный',
    'Насыщенный красный',
    'Красный',
    'Темно-красный',
    'Кровавый',
    'Глянцевый темно-красный',
    'Бардовый',
    'Малиново-красный',
    'Оранжевый',
    'Бледно-оранжевый',
    'Оранжево-желтый',
    'Красный',
    'Матовый темно-красный',
    'Светло-оранжевый',
    'Желтый',
    'Насыщенный красный',
    'Ярко-бардовый',
    'Бисмарк-фуриозо',
    'Красно-медный',
    'Оранжево-медный',
    'Матовый темно-алый',
    'Темно-зеленый',
    'Темно-зеленый',
    'Виридиан',
    'Тёмно-оливковый',
    'вердепомовый',
    'Нефритовый',
    'Кислотный',
    'Темно-зеленый',
    'Зеленый',
    'Матовый темно-зеленый',
    'Матовый оливковый',
    'Мха',
    'Темный сине-зеленый',
    'Сапфировый',
    'Лазурно-синий',
    'Синий',
    'Васильковый',
    'Серо-синий',
    'Белый',
    'Бледно-бирюзовый',
    'Бирюзовый',
    'Насыщенный небесно-голубой',
    'Аспидно-синий',
    'Темный аспидно-синий',
    'Голубой',
    'Небесно-голубой',
    'Кобальтовый',
    'Темный индиго',
    'Голубой ультрамарин',
    'Светло-голубой',
    'Темно-голубой',
    'Голубой',
    'Королевский синий',
    'Матовый сапфировый',
    'Матовый синий',
    'Матовый голубовато-стальной',
    'Матовый небесно-голубой',
    'Матовый небесно-голубой',
    'Матовый светлый небесно-голубой',
    'Золотистый',
    'Желтый',
    'Светло-древесный',
    'Светло-желтый',
    'Желто-зеленый',
    'Темно-бежевый',
    'Сепия',
    'Камелопардовый',
    'Бистр',
    'Коричневый',
    'Темная охра',
    'Землистый',
    'Серо-коричневый',
    'Красно-коричневый',
    'Светлый хаки',
    'Красно-коричневый',
    'Пряный',
    'Бежевый',
    'Кремовый',
    'Светло-кремовый',
    'Темно-коричневый',
    'Серо-коричневый',
    'Темно-кремовый',
    'Кремово-белый',
    'Белый',
    'Кремово-бежевый',
    'Матовый камелопардовый',
    'Матовый бистр',
    'Матовый Серо-коричневый',
    'Матовый темно-серый',
    'Матовый тускло-серый',
    'Матовый серебристый',
    'серебристый металлик',
    'Матовый Белый',
    'Матовый Кремово-белый',
    'Матовый золотистый',
    'Матовый светло-оранжевый',
    'Салатовый',
    'Матовый желтый',
    'Светло-бирюзовый',
    'Матовый оливково-зеленый',
    'Матовый темно-кремовый',
    'Матовый темно-желтый',
    'Матовый светло-белый',
    'Матовый ярко-белый',
    'Матовый оливковый',
    'Белый',
    'насыщенный розовый',
    'Светло-розовый',
    'Розовый',
    'Темно-желтый',
    'Зелено-желтый',
    'Морская волна',
    'Темно-синий',
    'Темно-баклажановый',
    'Баклажановый',
    'Серо-кремовый',
    'Насыщенный фиолетовый',
    'Темно-синий',
    'Черный',
    'Матовый насыщенно-фиолетовый',
    'Матовый черный',
    'Ярко-красный',
    'Матовый темно-зеленый',
    'Матовый светло-оливковый',
    'Матовый светло-шоколадный',
    'Матовый кремовый',
    'Матовый темно-оливковый',
    'Серебристый',
    'светлый небесно-голубой',
    'Светло-бронзовый #1',
    'Светло-бронзовый #2'
];

enums.lscCarColorPos = [[-1167.36,-2013.42,11.63059,136.2973],[-327.3558,-144.5778,38.04641,250.0263],[735.6607,-1072.729,21.2193,179.3472],[-206.2765,-1323.342,29.87665,2.203119],[1182.65,2638.49,36.78132,357.8441],[103.6963,6622.596,30.81484,224.0517],[-151.0918,-594.4427,166.0052,308.8605],[478.4267,-1308.524,28.01912,27.1145]];
enums.lscCamColorPos = [[-1167.856,-2016.76,13.53096],[-323.593,-143.7437,39.26034],[733.7505,-1069.566,22.43295],[-209.2587,-1319.221,31.09041],[1184.5,2635.391,38.0],[100.3815,6623.296,32.12886],[-146.051,-593.9824,167.5002],[475.9341,-1307.055,29.43324]];
enums.lscCarPos = [[-1159.827,-2015.182,12.16598,338.3167],[-330.8568,-137.6985,38.00612,95.85743],[732.1998,-1088.71,21.15658,89.10553],[-222.6972,-1329.915,29.87796,269.8108],[1174.876,2640.67,36.7454,0.5306945],[110.3291,6626.977,30.7735,223.695],[-147.4434,-599.0691,166.0058,315.3235],[481.2153,-1317.698,28.09073,296.715]];

enums.lscCamPos = [
    [-1155.691, -2012.395, 13.18026],
    [-335.2385, -136.069, 39.00966],
    [727.5853, -1091.216, 22.16918],
    [-217.821, -1327.9, 30.89041],
    [1177.862, 2644.075, 37.78613],
    [111.6643, 6621.887, 31.78725],
    [-145.8006, -594.2851, 167.0002],
    [482.9536, -1314.375, 29.20051]
];

/*enums.lscCamPos = [
    [-1155.691, -2012.395, 13.18026],
    [-1160.24, -2020.572, 13.18034],
    [-1163.919, -2015.856, 13.98026],

    [-335.2385, -136.069, 39.00966],
    [-326.8082, -134.7203, 39.00966],
    [-328.3979, -140.4191, 39.80966],

    [727.5853, -1091.216, 22.16918],
    [732.2767, -1084.753, 22.169],
    [736.9069, -1090.952, 22.98864],

    [-217.821, -1327.9, 30.89041],
    [-223.2449, -1333.283, 30.8904],
    [-226.2647, -1326.762, 31.3904],

    [1177.862, 2644.075, 37.78613],
    [1177.083, 2636.541, 37.75381],
    [1172.015, 2641.024, 38.29303],

    [111.6643, 6621.887, 31.78725],
    [106.7364, 6627.241, 31.78723],
    [112.0298, 6629.307, 32.28724],

    [-145.8006, -594.2851, 167.0002],
    [-144.9173, -602.0816, 167.5002],
    [-152.5041, -600.7098, 167.0002],

    [482.9536, -1314.375, 29.20051],
    [478.4819, -1314.576, 29.60341],
    [477.1504, -1319.856, 29.20595]
];*/

enums.lscCam = null;
enums.lscCamRot = 0;

enums.customIpl = [
    ['Arcadius', -113.6372, -606.4175, 35.28072, 250],
    ['Bike_rent_Chumash', -3239.396, 979.3148, 11.73511, 200],
    ['Bike_rent_DelPerro', -1440.362, -614.8734, 29.82768, 200],
    ['Bike_rent_DowntownVinewood', 318.6217, 134.4918, 102.5139, 200],
    ['Bike_rent_GrandSenoraDesert', 1932.529, 2624.868, 45.17271, 200],
    ['Bike_rent_Grapeseed', 1681.826, 4848.959, 41.11597, 200],
    ['Bike_rent_Harmony', 287.979, 2594.161, 43.42525, 200],
    ['Bike_rent_LittleSeoul', -873.5806, -811.7497, 18.28642, 200],
    ['Bike_rent_MirrorPark', 1127.512, -504.3805, 63.17381, 200],
    ['Bike_rent_MissionRow', 387.4997, -948.7668, 28.42549, 200],
    ['Bike_rent_PaletoBay', -265.0951, 6285.909, 30.47534, 200],
    ['Bike_rent_PillboxHill', -53.90234, -914.5641, 28.43059, 200],
    ['Bike_rent_RockfordHills', -824.4766, -116.8027, 36.5822, 200],
    ['Bike_rent_SandyShores', 1868.151, 3684.298, 32.72649, 200],
    ['Bike_rent_TextileCity', 297.3168, -602.5576, 42.30396, 200],
    ['Bike_rent_VespucciBeach', -1208.258, -1551.33, 3.373086, 200],
    ['Boat_FS_LTD_LagoZancudo', -2079.196, 2604.659, 1.030312, 400],
    ['Boat_FS_LTD_SanChianskiMR', 3855.35, 4458.623, 0.8497663, 400],
    ['Boat_FS_Xero_LaPuerta', -793.9843, -1505.001, -1.474684, 400],
    ['Boat_rent_LaPuerta', -789.2872, -1451.436, 0.6233408, 200],
    ['Boat_rent_PaletoCove', -1605.6, 5250.369, 2.974098, 200],
    ['Boat_rent_SanChianskiMR', 3865.394, 4463.864, 1.716229, 200],
    ['CCTV_LosSantos', -500.6877, -511.4886, 24.12395, 3000],
    ['CCTV_MirrorPark', 1129.704, -558.191, 55.74935, 500],
    ['Emergency', 343.1284, -1398.297, 31.50923, 200],
    ['Green_MirrorPark', 1129.704, -558.191, 55.74935, 750],
    ['Jail', 1702.445, 2518.294, 44.56486, 700],
    ['LSPD_MissionRow', 450.8555, -1002.655, 25.12975, 300],
    ['M83_Ammunation_PillboxHill', 6.731856, -1116.993, 27.67282, 250],
    ['MazeOffice', -50.70406, -788.6946, 43.2251, 200],
    ['Meria', -1378.306, -486.7387, 49.01204, 350],
    ['MirrorPark_Park', 1093.131, -635.7221, 57.74927, 400],
    ['M83_House623', 906.3942, -623.0359, 57.04899, 200],
    ['SD_PaletoBay', -461.1251, 6012.547, 30.34048, 400],
    ['Bike_rent_Strawberry', 56.76987, -1331.693, 28.3127, 200],
    ['Bike_rent_LISA', -1012.182, -2682.097, 12.98296, 200],
    ['Gruppe6_Garage', 452.8934, -1097.205, 34.05798, 400],
    ['M83_Ammunation_Morningwood', -1330.159, -392.0733, 35.56855, 200],
    ['RockfordHills_Church', -776.3428, 19.6968, 39.65411, 100],
    ['M83_House258', -1551.61, -86.43635, 53.3255, 200],
    ['M83_Apartaments33', 385.6998, -56.79765, 121.5355, 400],
    ['M83_House1126', -82.94398, 981.2236, 233.4471, 350],
    ['AutoSchool', -1582.849, -556.4066, 33.95407, 100],
    ['M83_House364', -554.9221, 753.3491, 184.4249, 250],
    ['M83_House254', -1492.88, 127.1316, 54.64317, 300],
    ['Army_Port', 528.8688, -3215.303, 16.12999, 400],
    ['M83_PacificStandart', 242.8493, 206.8475, 104.2568, 150],
    ['M83_Fleeca_Alta', 315.4205, -275.294, 52.92414, 100],
    ['M83_Fleeca_PillboxHill', 150.9835, -1037.152, 28.33922, 100],
    ['M83_Fleeca_BanhamCanyon', -2966.818, 483.0374, 14.69272, 100],
    ['M83_Fleeca_Burton', -349.8218, -46.09695, 48.0368, 100],
    ['M83_Fleeca_GrandSenoraDesert', 1175.237, 2702.871, 37.17272, 100],
];

enums.fractionListId = [];

enums.rentList = [[1033245328,"Dinghy","Boats",434],[276773164,"Dinghy2","Boats",315],[509498602,"Dinghy3","Boats",365],[867467158,"Dinghy4","Boats",430],[861409633,"Jetmax","Boats",1460],[-1043459709,"Marquis","Boats",31010],[-1030275036,"Seashark","Boats",86],[-311022263,"Seashark3","Boats",92],[944930284,"Smuggler","Boats",3960],[231083307,"Speeder","Boats",1860],[437538602,"Speeder2","Boats",1880],[400514754,"Squalo","Boats",552],[771711535,"Submersible","Boats",12510],[-1066334226,"Submersible2","Boats",17510],[-282946103,"Suntrap","Boats",300],[1070967343,"Toro","Boats",6110],[908897389,"Toro2","Boats",6260],[290013743,"Tropic","Boats",705],[1448677353,"Tropic2","Boats",735],[-2100640717,"Tug","Boats",13560],[2053223216,"Benson","Commercials",529],[1518533038,"Hauler","Commercials",358],[904750859,"Mule","Commercials",365],[-1050465301,"Mule2","Commercials",369],[-2052737935,"Mule3","Commercials",406],[569305213,"Packer","Commercials",289],[-2137348917,"Phantom","Commercials",601],[2112052861,"Pounder","Commercials",636],[1827997487,"Roadkiller","Commercials",472],[-344943009,"Blista","Compacts",74],[1039032026,"Blista2","Compacts",31],[-591651781,"Blista3","Compacts",42],[1549126457,"Brioso","Compacts",144],[-1130810103,"Dilettante","Compacts",90],[-1177863319,"Issi2","Compacts",66],[931280609,"Issi3","Compacts",260],[-431692672,"Panto","Compacts",58],[1507916787,"Picador","Compacts",287],[-1450650718,"Prairie","Compacts",71],[841808271,"Rhapsody","Compacts",75],[330661258,"CogCabrio","Coupes",970],[-5153954,"Exemplar","Coupes",785],[-591610296,"F620","Coupes",530],[-391594584,"Felon","Coupes",420],[-89291282,"Felon2","Coupes",460],[-624529134,"Jackal","Coupes",134],[1348744438,"Oracle","Coupes",122],[-511601230,"Oracle2","Coupes",305],[1349725314,"Sentinel","Coupes",366],[873639469,"Sentinel2","Coupes",416],[1581459400,"Windsor","Coupes",2680],[-1930048799,"Windsor2","Coupes",3110],[-1122289213,"Zion","Coupes",154],[-1193103848,"Zion2","Coupes",204],[1131912276,"bmx","Cycles",13],[448402357,"Cruiser","Cycles",14],[-836512833,"Fixter","Cycles",17],[-186537451,"Scorcher","Cycles",18],[1127861609,"TriBike","Cycles",24],[-1233807380,"TriBike2","Cycles",24],[-400295096,"TriBike3","Cycles",24],[745926877,"Buzzard2","Helicopters",7910],[744705981,"Frogger","Helicopters",13910],[-1984275979,"Havok","Helicopters",900],[-1660661558,"Maverick","Helicopters",9210],[-726768679,"Seasparrow","Helicopters",1960],[710198397,"Supervolito","Helicopters",25010],[-1671539132,"Supervolito2","Helicopters",30010],[-339587598,"Swift","Helicopters",19460],[1075432268,"Swift2","Helicopters",39460],[-1845487887,"Volatus","Helicopters",88510],[-2107990196,"Guardian","Industrial",915],[1672195559,"Akuma","Motorcycles",56],[-571009320,"Angel","Motorcycles",94],[-2115793025,"Avarus","Motorcycles",66],[-2140431165,"Bagger","Motorcycles",250],[-114291515,"Bati","Motorcycles",145],[-891462355,"Bati2","Motorcycles",175],[86520421,"BF400","Motorcycles",49],[-440768424,"Blazer4","Motorcycles",106],[11251904,"CarbonRS","Motorcycles",193],[6774487,"Chimera","Motorcycles",255],[390201602,"Cliffhanger","Motorcycles",392],[2006142190,"Daemon","Motorcycles",77],[-1404136503,"Daemon2","Motorcycles",80],[822018448,"Defiler","Motorcycles",82],[-239841468,"Diablous","Motorcycles",130],[1790834270,"Diablous2","Motorcycles",250],[-1670998136,"Double","Motorcycles",131],[1753414259,"Enduro","Motorcycles",32],[2035069708,"Esskey","Motorcycles",142],[627535535,"Fcr","Motorcycles",125],[-757735410,"Fcr2","Motorcycles",225],[741090084,"Gargoyle","Motorcycles",595],[1265391242,"Hakuchou","Motorcycles",115],[-255678177,"Hakuchou2","Motorcycles",215],[301427732,"Hexer","Motorcycles",79],[-159126838,"Innovation","Motorcycles",194],[640818791,"Lectro","Motorcycles",81],[-1523428744,"Manchez","Motorcycles",94],[-634879114,"Nemesis","Motorcycles",90],[-1606187161,"Nightblade","Motorcycles",145],[-909201658,"PCJ","Motorcycles",86],[1873600305,"Ratbike","Motorcycles",59],[-893578776,"Ruffian","Motorcycles",87],[788045382,"Sanchez","Motorcycles",84],[-1453280962,"Sanchez2","Motorcycles",89],[1491277511,"Sanctus","Motorcycles",166],[-405626514,"Shotaro","Motorcycles",3910],[743478836,"Sovereign","Motorcycles",95],[1836027715,"Thrust","Motorcycles",61],[-140902153,"Vader","Motorcycles",77],[-1353081087,"Vindicator","Motorcycles",101],[-609625092,"Vortex","Motorcycles",207],[-618617997,"Wolfsbane","Motorcycles",50],[-1009268949,"Zombiea","Motorcycles",109],[-570033273,"Zombieb","Motorcycles",108],[-1205801634,"Blade","Muscle",338],[-682211828,"Buccaneer","Muscle",250],[-1013450936,"Buccaneer2","Muscle",350],[349605904,"Chino","Muscle",205],[-1361687965,"Chino2","Muscle",305],[-1116818112,"Domc","Muscle",474],[80636076,"Dominator","Muscle",91],[-915704871,"Dominator2","Muscle",101],[-986944621,"Dominator3","Muscle",460],[723973206,"Dukes","Muscle",764],[2134119907,"Dukes3","Muscle",854],[-1267543371,"Ellie","Muscle",1900],[-2119578145,"Faction","Muscle",305],[-1790546981,"Faction2","Muscle",405],[-2039755226,"Faction3","Muscle",425],[-1800170043,"Gauntlet","Muscle",209],[349315417,"Gauntlet2","Muscle",219],[-1848730848,"Gauntlets","Muscle",262],[15219735,"Hermes","Muscle",825],[37348240,"Hotknife","Muscle",463],[600450546,"Hustler","Muscle",493],[525509695,"Moonbeam","Muscle",57],[1896491931,"Moonbeam2","Muscle",157],[-1943285540,"NightShade","Muscle",352],[-2095439403,"Phoenix","Muscle",373],[-667151410,"RatLoader","Muscle",104],[-589178377,"RatLoader2","Muscle",404],[-227741703,"Ruiner","Muscle",97],[-1685021548,"SabreGT","Muscle",244],[223258115,"SabreGT2","Muscle",344],[729783779,"Slamvan","Muscle",365],[833469436,"SlamVan2","Muscle",415],[1119641113,"SlamVan3","Muscle",465],[1923400478,"Stalion","Muscle",260],[-401643538,"Stalion2","Muscle",270],[972671128,"Tampa","Muscle",282],[-825837129,"Vigero","Muscle",454],[-1758379524,"Vigero2","Muscle",55],[-498054846,"Virgo","Muscle",73],[-899509638,"Virgo2","Muscle",243],[16646064,"Virgo3","Muscle",143],[2006667053,"Voodoo","Muscle",363],[523724515,"Voodoo2","Muscle",64],[1871995513,"Yosemite","Muscle",165],[1126868326,"BfInjection","Off-Road",79],[-349601129,"Bifta","Off-Road",104],[-2128233223,"Blazer","Off-Road",52],[-1269889662,"Blazer3","Off-Road",56],[-1435919434,"Bodhi2","Off-Road",122],[-1479664699,"Brawler","Off-Road",1295],[-1993175239,"Cara","Off-Road",375],[1770332643,"DLoader","Off-Road",145],[-1661854193,"Dune","Off-Road",19],[92612664,"Kalahari","Off-Road",190],[-121446169,"Kamacho","Off-Road",463],[-2064372143,"Mesa3","Off-Road",280],[1390084576,"Rancher","Off-Road",262],[1645267888,"RancherXL","Off-Road",310],[-1207771834,"Rebel","Off-Road",22],[-2045594037,"Rebel2","Off-Road",47],[-1532697517,"Riata","Off-Road",860],[-1189015600,"Sandking","Off-Road",252],[989381445,"Sandking2","Off-Road",202],[101905590,"TrophyTruck","Off-Road",765],[-663299102,"TrophyTruck2","Off-Road",715],[-1523619738,"AlphaZ1","Planes",5360],[-150975354,"Blimp","Planes",25010],[-613725916,"Blimp2","Planes",25510],[-644710429,"Cuban800","Planes",1364],[-901163259,"Dodo","Planes",3465],[970356638,"Duster","Planes",489],[-1007528109,"Howard","Planes",4135],[621481054,"Luxor","Planes",23010],[-1214293858,"Luxor2","Planes",53010],[-1746576111,"Mammatus","Planes",1500],[-1763555241,"Microlight","Planes",363],[-392675425,"Seabreeze","Planes",3500],[-2122757008,"Stunt","Planes",3000],[-1673356438,"Velum","Planes",26010],[1077420264,"Velum2","Planes",28010],[1341619767,"Vestra","Planes",18810],[-1809822327,"Asea","Sedans",75],[-1903012613,"Asterope","Sedans",155],[906642318,"Cog55","Sedans",710],[-2030171296,"Cognoscenti","Sedans",530],[-685276541,"Emperor","Sedans",84],[-1883002148,"Emperor2","Sedans",33],[-311302597,"Emperor4","Sedans",154],[1909141499,"Fugitive","Sedans",150],[75131841,"Glendale","Sedans",161],[40817712,"Greenwood","Sedans",67],[-1289722222,"Ingot","Sedans",43],[886934177,"Intruder","Sedans",51],[-350899544,"Merit2","Sedans",100],[-2077743597,"Perennial","Sedans",29],[-1883869285,"Premier","Sedans",54],[-1150599089,"Primo","Sedans",55],[-2040426790,"Primo2","Sedans",155],[-14495224,"Regina","Sedans",86],[-1369781310,"Regina3","Sedans",94],[-322343873,"Schafter","Sedans",54],[-1477580979,"Stanier","Sedans",35],[-1445320949,"Stanier2","Sedans",40],[1723137093,"Stratum","Sedans",33],[-1961627517,"Stretch","Sedans",535],[-1894894188,"Surge","Sedans",102],[-1008861746,"Tailgater","Sedans",76],[251388012,"Torrence","Sedans",152],[-583281407,"Vincent","Sedans",45],[1373123368,"Warrener","Sedans",559],[1777363799,"Washington","Sedans",58],[767087018,"Alpha","Sports",1290],[-1041692462,"Banshee","Sports",860],[1274868363,"BestiaGTS","Sports",1930],[-304802106,"Buffalo","Sports",64],[736902334,"Buffalo2","Sports",105],[237764926,"Buffalo3","Sports",125],[2072687711,"Carbonizzare","Sports",2990],[-1045541610,"Comet2","Sports",1710],[-2022483795,"Comet3","Sports",1255],[1561920505,"Comet4","Sports",3910],[661493923,"Comet5","Sports",4610],[108773431,"Coquette","Sports",690],[-1728685474,"Coquette4","Sports",258],[-2125340601,"Coquette42","Sports",263],[196747873,"Elegy","Sports",669],[-566387422,"Elegy2","Sports",709],[-1995326987,"Feltzer2","Sports",260],[-1566741232,"Feltzer3","Sports",12510],[-1259134696,"FlashGT","Sports",910],[-1089039904,"Furoregt","Sports",1700],[499169875,"Fusilade","Sports",145],[2016857647,"Futo","Sports",175],[1909189272,"GB200","Sports",560],[-1297672541,"Jester","Sports",1790],[-1106353882,"Jester2","Sports",1820],[544021352,"Khamelion","Sports",830],[-1372848492,"Kuruma","Sports",245],[482197771,"Lynx","Sports",870],[-142942670,"Massacro","Sports",1330],[-631760477,"Massacro2","Sports",1360],[-1848994066,"Neon","Sports",2910],[1032823388,"Ninef","Sports",960],[-1461482751,"Ninef2","Sports",1010],[-777172681,"Omnis","Sports",595],[867799010,"Pariah","Sports",3260],[-377465520,"Penumbra","Sports",76],[-1529242755,"Raiden","Sports",2310],[-1934452204,"RapidGT","Sports",530],[1737773231,"RapidGT2","Sports",580],[-674927303,"Raptor","Sports",610],[-410205223,"Revolter","Sports",755],[719660200,"Ruston","Sports",990],[-1255452397,"Schafter2","Sports",186],[-1485523546,"Schafter3","Sports",286],[1489967196,"Schafter4","Sports",336],[-746882698,"Schwarzer","Sports",246],[1104234922,"Sentinel3","Sports",462],[-1757836725,"Seven70","Sports",2710],[1886268224,"Specter","Sports",28510],[1074745671,"Specter2","Sports",29510],[1741861769,"Streiter","Sports",1410],[970598228,"Sultan","Sports",276],[384071873,"Surano","Sports",1500],[-1071380347,"Tampa2","Sports",782],[1887331236,"Tropos","Sports",4760],[1102544804,"Verlierer2","Sports",650],[117401876,"BType","Sports Classics",4510],[-831834716,"BType2","Sports Classics",3810],[-602287871,"BType3","Sports Classics",5810],[941800958,"Casco","Sports Classics",2910],[-988501280,"Cheburek","Sports Classics",61],[223240013,"Cheetah2","Sports Classics",1260],[1011753235,"Coquette2","Sports Classics",950],[784565758,"Coquette3","Sports Classics",1240],[1617472902,"Fagaloa","Sports Classics",154],[-2079788230,"GT500","Sports Classics",6210],[-1405937764,"Infernus2","Sports Classics",2760],[1051415893,"JB700","Sports Classics",9710],[-1660945322,"Mamba","Sports Classics",560],[-2124201592,"Manana","Sports Classics",221],[1046206681,"Michelli","Sports Classics",466],[-433375717,"Monroe","Sports Classics",16010],[1830407356,"Peyote","Sports Classics",460],[1078682497,"Pigalle","Sports Classics",402],[2049897956,"RapidGT3","Sports Classics",1605],[1841130506,"Retinue","Sports Classics",359],[903794909,"Savestra","Sports Classics",1160],[1545842587,"Stinger","Sports Classics",85010],[-2098947590,"StingerGT","Sports Classics",120010],[1504306544,"Torero","Sports Classics",4810],[464687292,"Tornado","Sports Classics",365],[1531094468,"Tornado2","Sports Classics",415],[1762279763,"Tornado3","Sports Classics",85],[-2033222435,"Tornado4","Sports Classics",75],[-1797613329,"Tornado5","Sports Classics",515],[-1558399629,"Tornado6","Sports Classics",256],[-982130927,"Turismo2","Sports Classics",12510],[-391595372,"Viseris","Sports Classics",1460],[838982985,"Z190","Sports Classics",305],[758895617,"ZType","Sports Classics",100010],[-1216765807,"Adder","Super",17010],[-313185164,"Autarch","Super",21510],[633712403,"Banshee2","Super",1790],[-1696146015,"Bullet","Super",2660],[-802062533,"Bullet2","Super",2810],[-1311154784,"Cheetah","Super",24510],[1392481335,"Cyclone","Super",9810],[-2120700196,"Entity2","Super",25010],[-1291952903,"EntityXF","Super",13210],[1426219628,"FMJ","Super",20510],[1234311532,"GP1","Super",39010],[418536135,"Infernus","Super",1730],[-2048333973,"Italigtb","Super",1910],[-482719877,"Italigtb2","Super",2610],[-1232836011,"LE7B","Super",29010],[1034187331,"Nero","Super",33510],[1093792632,"Nero2","Super",36510],[1987142870,"Osiris","Super",22510],[-1758137366,"Penetrator","Super",6610],[-1829802492,"Pfister811","Super",14910],[2123327359,"Prototipo","Super",25010],[234062309,"Reaper","Super",33910],[1352136073,"SC1","Super",2960],[819197656,"Sheava","Super",3260],[-295689028,"SultanRS","Super",776],[1123216662,"Superd","Super",2210],[1663218586,"T20","Super",19510],[-1134706562,"Taipan","Super",16510],[272929391,"Tempesta","Super",2360],[1031562256,"Tezeract","Super",28510],[408192225,"Turismor","Super",34010],[-376434238,"Tyrant","Super",8160],[2067820283,"Tyrus","Super",57010],[338562499,"Vacca","Super",1360],[1939284556,"Vagner","Super",36510],[-998177792,"Visione","Super",43510],[-1622444098,"Voltic","Super",660],[917809321,"XA21","Super",12910],[-1403128555,"Zentorno","Super",30110],[-808831384,"Baller","SUVs",370],[142944341,"Baller2","SUVs",440],[1878062887,"Baller3","SUVs",505],[634118882,"Baller4","SUVs",575],[850565707,"BJXL","SUVs",195],[2006918058,"Cavalcade","SUVs",86],[-789894171,"Cavalcade2","SUVs",191],[683047626,"Contender","SUVs",1960],[1034516789,"Contender2","SUVs",135],[1177543287,"Dubsta","SUVs",1060],[-394074634,"Dubsta2","SUVs",1510],[-1237253773,"Dubsta3","SUVs",8760],[-2078554704,"Executioner","SUVs",108],[-1137532101,"FQ2","SUVs",235],[-1775728740,"Granger","SUVs",170],[-261346873,"Granger2","SUVs",66],[-33078019,"Granger3","SUVs",72],[-1543762099,"Gresley","SUVs",142],[884422927,"Habanero","SUVs",84],[486987393,"Huntley","SUVs",2110],[-330060047,"Huntley2","SUVs",180],[1269098716,"Landstalker","SUVs",189],[914654722,"Mesa","SUVs",180],[-808457413,"Patriot","SUVs",725],[-1651067813,"Radi","SUVs",114],[2136773105,"Rocoto","SUVs",389],[1221512915,"Seminole","SUVs",122],[-1810806490,"Seminole2","SUVs",129],[1337041428,"Serrano","SUVs",132],[1203490606,"XLS","SUVs",122],[-599568815,"Sadler","Utility",323],[-2076478498,"Tractor2","Utility",460],[-16948145,"Bison","Vans",281],[2072156101,"Bison2","Vans",285],[1739845664,"Bison3","Vans",307],[1069929536,"BobcatXL","Vans",64],[-1346687836,"Burrito","Vans",80],[-907477130,"Burrito2","Vans",79],[-1743316013,"Burrito3","Vans",72],[893081117,"Burrito4","Vans",79],[1876516712,"Camper","Vans",204],[486160351,"Contender8","Vans",68],[-1745203402,"GBurrito","Vans",145],[296357396,"GBurrito2","Vans",140],[-120287622,"Journey","Vans",99],[-310465116,"Minivan","Vans",42],[-1126264336,"Minivan2","Vans",142],[1488164764,"Paradise","Vans",144],[-119658072,"Pony","Vans",79],[943752001,"Pony2","Vans",84],[-1776615689,"Rumpo2","Vans",122],[1475773103,"Rumpo3","Vans",217],[524266990,"Speedo3","Vans",96],[440299355,"Steed2","Vans",68],[699456151,"Surfer","Vans",225],[-1311240698,"Surfer2","Vans",75],[1951180813,"Taco","Vans",236],[65402552,"Youga","Vans",79],[1026149675,"Youga2","Vans",46]];



enums.animActions = [
    ["Поднять руки", "random@mugging3", "handsup_standing_base", 49],
    ["Передать что-то по рации", "random@arrests", "generic_radio_chatter", 49],
    ["Сесть 1","amb@prop_human_seat_chair@male@generic@base", "base",9],
    ["Сесть 2","amb@prop_human_seat_chair@male@elbows_on_knees@base", "base",9],
    ["Сесть 3","amb@prop_human_seat_chair@male@left_elbow_on_knee@base", "base",9],
    ["Сесть 4","amb@prop_human_seat_chair@male@right_foot_out@base", "base",9],
    ["Свистнуть", "taxi_hail", "fp_hail_taxi", 8],
    ["Выполнить воиское приветствие", "anim@mp_player_intincarsalutestd@ds@", "idle_a", 8],
    ["Показать пальцем", "gestures@m@standing@casual", "gesture_point", 8],
    ["Согласиться-1", "gestures@m@standing@casual", "gesture_i_will", 8],
    ["Согласиться-2", "gestures@m@standing@fat", "gesture_bye_soft", 8],
    ["Отказать-1", "gestures@m@standing@casual", "gesture_nod_no_hard", 8],
    ["Отказать-2", "gestures@m@standing@casual", "gesture_no_way", 8],
    ["Отказать-3", "amb@code_human_in_car_mp_actions@nod@bodhi@ds@base", "nod_no_fp", 8],
    ["Пожать плечами", "gestures@m@standing@casual", "gesture_what_soft", 8],
    ["Положить что-то в рот", "mp_player_int_uppersmoke", "mp_player_int_smoke_enter", 8],
    ["Закинуться", "move_m@drunk@transitions", "slightly_to_idle", 8],
    ["Постучать", "amb@code_human_in_car_mp_actions@dance@bodhi@ps@base", "idle_a_fp", 8],
    ["Ударить по лежащему", "anim@heists@ornate_bank@hostages@hit", "player_melee_long_pistol_a", 8],
    ["Пнуть ногой", "anim@mp_freemode_return@f@fail", "fail_a", 8],
    ["Махать руками", "random@car_thief@victimpoints_ig_3", "arms_waving", 8],
    ["Отмахнуться-1", "taxi_hail", "forget_it", 8],
    ["Отмахнуться-2", "anim@mp_freemode_return@f@idle", "idle_b", 8],
    ["Подобрать с земли", "random@mugging4", "pickup_low", 8],
    ["Осмотреть землю", "amb@code_human_police_investigate@idle_b", "idle_f", 8],
    ["Ковырять в земле", "amb@world_human_bum_wash@male@high@idle_a", "idle_a", 8],
    ["Схватиться за живот", "rcmpaparazzo1", "idle", 8],
    ["Почесать задницу", "anim@heists@team_respawn@respawn_02", "heist_spawn_02_ped_d", 8],
    ["Помолиться", "pro_mcs_7_concat-0", "cs_priest_dual-0", 8],
    ["Поклониться-1", "anim@mp_player_intcelebrationpaired@f_f_sarcastic", "sarcastic_right", 8],
    ["Поклониться-2", "anim@mp_player_intcelebrationpaired@m_m_sarcastic", "sarcastic_left", 8],
    ["Отжаться", "amb@world_human_push_ups@male@base", "base", 8],
    ["Качать пресс", "amb@world_human_sit_ups@male@base", "base", 8],
    ["Отдышаться", "timetable@reunited@ig_2", "jimmy_base", 8],
    ["Потерять сознание", "missfam5_blackout", "pass_out", 8],
    ["Умыться", "missfam2_washing_face", "michael_washing_face", 8],
    ["Потереть шею", "amb@world_human_cop_idles@female@idle_a", "idle_c", 8],
    ["Потереть ладони", "amb@world_human_cop_idles@female@idle_b", "idle_d", 8],
    ["Потереть руки", "move_action@p_m_one@unarmed@idle@variations", "idle_a", 8],
    ["Показать два пальца", "amb@code_human_in_car_mp_actions@v_sign@bodhi@rps@base", "idle_a", 8],
    ["Смотреть по сторонам", "amb@world_human_guard_patrol@male@idle_a", "idle_b", 8],
    ["Осмотреть", "amb@medic@standing@kneel@enter", "enter", 8],
    ["Высматривать", "missmic4premiere", "crowd_c_idle_01", 8],
    ["Тссс", "anim@mp_player_intcelebrationfemale@shush", "shush", 8],
    ["Ковырять в носу", "anim@mp_player_intcelebrationfemale@nose_pick", "nose_pick", 8],
    ["Подумать", "amb@code_human_police_investigate@idle_a", "idle_a", 8],
    ["Собирать в руках", "amb@prop_human_movie_studio_light@idle_a", "idle_a", 8],
    ["Греться у костра", "amb@world_human_stand_fire@male@base", "base", 9],
    ["Принимать душ", "mp_safehouseshower@male@", "male_shower_idle_d", 8],
    ["Секс (Мужчина)", "rcmpaparazzo_2", "shag_action_a", 8],
    ["Секс (Женщина)", "rcmpaparazzo_2", "shag_action_poppy", 8]
];
enums.animPose = [
    ["Руки вверх", "anim@move_hostages@male", "male_idle", 9],
    ["Руки за голову", "anim@heists@ornate_bank@hostages@cashier_b@", "flinch_loop_underfire", 8],
    ["Руки за спину", "anim@miss@low@fin@vagos@", "idle_ped06", 8],
    ["Просить пощады", "amb@code_human_cower@male@react_cowering", "base_front", 9],
    ["Присесть-1", "anim@miss@low@fin@lamar@", "idle", 9],
    ["Присесть-2", "amb@medic@standing@tendtodead@enter", "enter", 8],
    ["Присесть-3", "amb@medic@standing@kneel@base", "base", 9],
    ["Лечь на бок", "amb@world_human_bum_slumped@male@laying_on_right_side@base", "base", 9],
    ["Лечь на живот", "amb@world_human_sunbathe@male@front@base", "base", 9],
    ["Лечь на спину", "missfbi1", "cpr_pumpchest_idle", 9],
    ["Распальцовка-1", "missmic4premiere", "wave_b", 8],
    ["Распальцовка-2", "amb@code_human_in_car_mp_actions@v_sign@std@rds@base", "enter", 8],
    ["Пальцы вверх", "anim@mp_player_intcelebrationfemale@thumbs_up", "thumbs_up", 8],
    ["Палец вверх", "anim@mp_player_intincarthumbs_upbodhi@ds@", "enter_fp", 8],
    ["Скрестить руки-1", "rcmme_amanda1", "stand_loop_cop", 9],
    ["Скрестить руки-2", "amb@world_human_cop_idles@female@idle_b", "idle_e", 8],
    ["Руки в боки", "amb@code_human_police_investigate@base", "base", 9],
    ["Поза охранника", "missfbi4mcs_2", "loop_sec_b", 9],
    ["Бег на месте разводя руки", "amb@world_human_jog_standing@female@idle_a", "idle_a", 8],
    ["Бег на месте", "amb@world_human_jog_standing@male@base", "base", 8],
    ["Размяться-1", "amb@world_human_muscle_flex@arms_at_side@idle_a", "idle_a", 8],
    ["Размяться-2", "timetable@tracy@ig_5@idle_b", "idle_d", 8],
    ["Показать бицепс-1", "amb@world_human_muscle_flex@arms_at_side@idle_a", "idle_c", 8],
    ["Показать бицепс-2", "amb@world_human_muscle_flex@arms_in_front@base", "base", 8],
    ["Расставить руки в стороны", "missfam5_yoga", "c1_pose", 8],
    ["Расставить руки и ноги в стороны", "missfam5_yoga", "a2_pose", 8],
    ["Медитировать-1", "missfam5_yoga", "f_yogapose_a", 8],
    ["Медитировать-2", "missfam5_yoga", "c8_pose", 8],
    ["Медитировать-3", "missfam5_yoga", "b4_fail_to_start", 8],
    ["Медитировать-4", "missfam5_yoga", "start_to_c1", 8],
    ["Медитировать-5", "missfam5_yoga", "start_to_a1", 8],
    ["Медитировать-6", "missfam5_yoga", "a2_to_a3", 8],
    ["Медитировать-7", "missfam5_yoga", "a3_fail_to_start", 8]
];
enums.animPositive = [
    ["Радоваться-1", "missmic_4premiere", "movie_prem_01_f_a", 8],
    ["Радоваться-2", "mini@dartsoutro", "darts_outro_03_guy2", 8],
    ["Радоваться-3", "mini@dartsoutro", "darts_outro_01_guy1", 8],
    ["Радоваться-4", "anim@mp_player_intcelebrationfemale@freakout", "freakout", 8],
    ["Хлопать в ладоши-1", "missmic_4premiere", "movie_prem_02_f_a", 8],
    ["Хлопать в ладоши-2", "amb@world_human_cheering@female_d", "base", 8],
    ["Хлопать в ладоши-3", "amb@world_human_cheering@male_a", "base", 8],
    ["Хлопать в ладоши-4", "amb@world_human_cheering@male_e", "base", 8],
    ["Хлопать в ладоши-5", "anim@mp_player_intcelebrationfemale@slow_clap", "slow_clap", 8],
    ["Поддержать-1", "amb@world_human_cheering@female_a", "base", 8],
    ["Поддержать-2", "amb@world_human_cheering@female_c", "base", 8],
    ["Поддержать-3", "amb@world_human_cheering@male_b", "base", 8],
    ["Поцеловать-1", "anim@mp_player_intcelebrationfemale@blow_kiss", "blow_kiss", 8],
    ["Поцеловать-2", "anim@mp_player_intcelebrationfemale@chin_brush", "chin_brush", 8],
    ["Поцеловать-3", "anim@mp_player_intcelebrationfemale@finger_kiss", "finger_kiss", 8],
    ["Успокоить", "amb@code_human_police_crowd_control@idle_a", "idle_c", 8],
    ["Уважение", "anim@mp_player_intcelebrationfemale@bro_love", "bro_love", 8]
];
enums.animNegative = [
    ["Размять кулаки-1", "anim@mp_player_intcelebrationfemale@knuckle_crunch", "knuckle_crunch", 8],
    ["Размять кулаки-2", "anim@mp_player_intincarknuckle_crunchbodhi@ps@", "idle_a_fp", 8],
    ["Разочароваться", "mini@dartsoutro", "darts_outro_03_guy1", 8],
    ["Виноват", "anim@mp_parachute_outro@female@lose", "lose_loop", 8],
    ["Дурак", "anim@mp_player_intcelebrationfemale@you_loco", "you_loco", 8],
    ["Facepalm", "anim@mp_player_intcelebrationfemale@face_palm", "face_palm", 8],
    ["Расстрелять", "amb@world_human_superhero@male@space_pistol@idle_a", "idle_b", 8],
    ["С ружьем", "anim@deathmatch_intros@2hcombat_mgmale", "intro_male_mg_c", 8],
    ["С битой", "anim@deathmatch_intros@melee@2h", "intro_male_melee_2h_b_gclub", 8],
    ["Встать в стойку-1", "anim@deathmatch_intros@unarmed", "intro_male_unarmed_c", 8],
    ["Встать в стойку-2", "anim@deathmatch_intros@unarmed", "intro_male_unarmed_a", 8],
    ["Встать в стойку-3", "anim@deathmatch_intros@unarmed", "intro_male_unarmed_b", 8],
    ["Встать в стойку-4", "anim@deathmatch_intros@unarmed", "intro_male_unarmed_d", 8]
];
enums.animDance = [
    ["DJ", "anim@mp_player_intcelebrationfemale@dj", "dj", 8],
    ["Танец-1", "misschinese2_crystalmazemcs1_ig", "dance_loop_tao", 9],
    ["Танец-2", "mini@strip_club@lap_dance_2g@ld_2g_p2", "ld_2g_p2_s1", 9],
    ["Танец-3", "mini@strip_club@lap_dance_2g@ld_2g_p3", "ld_2g_p3_s2", 9],
    ["Танец-4", "amb@world_human_partying@female@partying_beer@idle_a", "idle_b", 9],
    ["Танец-5", "amb@world_human_prostitute@cokehead@idle_a", "idle_a", 9],
    ["Танец-6", "amb@world_human_prostitute@cokehead@idle_a", "idle_c", 9],
    ["Танец-7", "amb@world_human_jog_standing@female@base", "base", 9],
    ["Танец-8", "timetable@tracy@ig_8@idle_a", "idle_a", 8],
    ["Танец-9", "timetable@tracy@ig_5@idle_a", "idle_a", 9],
    ["Танец-10", "timetable@tracy@ig_5@idle_a", "idle_b", 9],
    ["Танец-11", "timetable@tracy@ig_5@idle_a", "idle_c", 9],
    ["Танец-12", "oddjobs@assassinate@multi@yachttarget@lapdance", "yacht_ld_f", 8],
    ["Танец-13", "mp_safehouse", "lap_dance_girl", 8],
    ["Пританцовывать", "misscarsteal4@toilet", "desperate_toilet_idle_a", 9],
    ["Доп. Танец 1", "anim@amb@nightclub@dancers@club_ambientpeds@med-hi_intensity", "mi-hi_amb_club_10_v1_male^6", 9],
    ["Доп. Танец 2", "amb@code_human_in_car_mp_actions@dance@bodhi@ds@base", "idle_a_fp", 9],
    ["Доп. Танец 3", "amb@code_human_in_car_mp_actions@dance@bodhi@rds@base", "idle_b", 9],
    ["Доп. Танец 4", "amb@code_human_in_car_mp_actions@dance@std@ds@base", "idle_a", 9],
    ["Доп. Танец 5", "anim@amb@nightclub@dancers@crowddance_facedj@hi_intensity", "hi_dance_facedj_09_v2_male^6", 9],
    ["Доп. Танец 6", "anim@amb@nightclub@dancers@crowddance_facedj@low_intesnsity", "li_dance_facedj_09_v1_male^6", 9],
    ["Доп. Танец 7", "anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_hi_intensity", "trans_dance_facedj_hi_to_li_09_v1_male^6", 9],
    ["Доп. Танец 8", "anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_low_intensity", "trans_dance_facedj_li_to_hi_07_v1_male^6", 9],
    ["Доп. Танец 9", "anim@amb@nightclub@dancers@crowddance_groups@hi_intensity", "hi_dance_crowd_13_v2_male^6", 9],
    ["Доп. Танец 10", "anim@amb@nightclub@dancers@crowddance_groups_transitions@from_hi_intensity", "trans_dance_crowd_hi_to_li__07_v1_male^6", 9],
    ["Доп. Танец 11", "anim@amb@nightclub@dancers@crowddance_single_props@hi_intensity", "hi_dance_prop_13_v1_male^6", 9],
    ["Доп. Танец 12", "anim@amb@nightclub@dancers@crowddance_single_props_transitions@from_med_intensity", "trans_crowd_prop_mi_to_li_11_v1_male^6", 9],
    ["Доп. Танец 13", "anim@amb@nightclub@mini@dance@dance_solo@male@var_a@", "med_center_up", 9],
    ["Доп. Танец 14", "anim@amb@nightclub@mini@dance@dance_solo@male@var_a@", "med_right_up", 9],
    ["Доп. Танец 15", "anim@amb@nightclub@dancers@crowddance_groups@low_intensity", "li_dance_crowd_17_v1_male^6", 9],
    ["Доп. Танец 16", "anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_med_intensity", "trans_dance_facedj_mi_to_li_09_v1_male^6", 9],
    ["Доп. Танец 17", "timetable@tracy@ig_5@idle_b", "idle_e", 9],
    ["Доп. Танец 18", "mini@strip_club@idles@dj@idle_04", "idle_04", 9],
    ["Доп. Танец 19", "special_ped@mountain_dancer@monologue_1@monologue_1a", "mtn_dnc_if_you_want_to_get_to_heaven", 9],
    ["Доп. Танец 20", "special_ped@mountain_dancer@monologue_4@monologue_4a", "mnt_dnc_verse", 9],
    ["Доп. Танец 21", "special_ped@mountain_dancer@monologue_3@monologue_3a", "mnt_dnc_buttwag", 9],
    ["Доп. Танец 22", "anim@amb@nightclub@dancers@black_madonna_entourage@", "hi_dance_facedj_09_v2_male^5", 9],
    ["Доп. Танец 23", "anim@amb@nightclub@dancers@crowddance_single_props@", "hi_dance_prop_09_v1_male^6", 9],
    ["Доп. Танец 24", "anim@amb@nightclub@dancers@dixon_entourage@", "mi_dance_facedj_15_v1_male^4", 9],
    ["Доп. Танец 25", "anim@amb@nightclub@dancers@podium_dancers@", "hi_dance_facedj_17_v2_male^5", 9],
    ["Доп. Танец 26", "anim@amb@nightclub@dancers@tale_of_us_entourage@", "mi_dance_prop_13_v2_male^4", 9],
    ["Доп. Танец 27", "misschinese2_crystalmazemcs1_cs", "dance_loop_tao", 9],
    ["Доп. Танец 28", "misschinese2_crystalmazemcs1_ig", "dance_loop_tao", 9],
    ["Доп. Танец 29", "anim@mp_player_intcelebrationfemale@uncle_disco", "uncle_disco", 9],
    ["Доп. Танец 30", "anim@mp_player_intcelebrationfemale@raise_the_roof", "raise_the_roof", 9],
    ["Доп. Танец 31", "anim@mp_player_intcelebrationmale@cats_cradle", "cats_cradle", 9],
    ["Доп. Танец 32", "anim@mp_player_intupperbanging_tunes", "idle_a", 9],
    ["Доп. Танец 33", "anim@amb@nightclub@mini@dance@dance_solo@female@var_a@", "high_center", 9],
    ["Доп. Танец 34", "anim@amb@nightclub@mini@dance@dance_solo@female@var_b@", "high_center", 9],
    ["Доп. Танец 35", "anim@amb@nightclub@mini@dance@dance_solo@male@var_b@", "high_center", 9],
    ["Доп. Танец 36", "anim@amb@nightclub@dancers@crowddance_facedj_transitions@", "trans_dance_facedj_hi_to_mi_11_v1_female^6", 9],
    ["Доп. Танец 37", "anim@amb@nightclub@dancers@crowddance_facedj_transitions@from_hi_intensity", "trans_dance_facedj_hi_to_li_07_v1_female^6", 9],
    ["Доп. Танец 38", "anim@amb@nightclub@dancers@crowddance_facedj@", "hi_dance_facedj_09_v1_female^6", 9],
    ["Доп. Танец 39", "anim@amb@nightclub@dancers@crowddance_groups@hi_intensity", "hi_dance_crowd_09_v1_female^6", 9],
    ["Доп. Танец 40", "anim@amb@nightclub@lazlow@hi_podium@", "danceidle_hi_06_base_laz", 9],
    ["Доп. Танец 41", "special_ped@zombie@monologue_4@monologue_4l", "iamtheundead_11", 9]
];
enums.animRemain = [
    ["Секс-1", "anim@mp_player_intcelebrationfemale@air_shagging", "air_shagging", 8],
    ["Секс-2", "anim@mp_player_intcelebrationfemale@dock", "dock", 8],
    ["Курица", "anim@mp_player_intcelebrationfemale@chicken_taunt", "chicken_taunt", 8],
    ["Дразнить-1", "anim@mp_player_intcelebrationfemale@jazz_hands", "jazz_hands", 8],
    ["Дразнить-2", "anim@mp_player_intcelebrationfemale@thumb_on_ears", "thumb_on_ears", 8],
    ["Дразнить-3", "anim@mp_player_intcelebrationmale@thumb_on_ears", "thumb_on_ears", 8],
    ["Фотограф", "anim@mp_player_intcelebrationfemale@photography", "photography", 8],
    ["Рок", "amb@code_human_in_car_mp_actions@rock@bodhi@rps@base", "idle_a", 8],
    ["Гитарист", "anim@mp_player_intcelebrationfemale@air_guitar", "air_guitar", 8],
    ["Труп", "anim@melee@machete@streamed_core@", "victim_front_takedown", 8],
    ["Ломка", "creatures@rottweiler@melee@", "victim_takedown_from_front", 8],
    ["Пробежка на месте", "amb@world_human_jog_standing@male@base", "base", 8],
    ["Качаться", "anim@mp_player_intcelebrationmale@peace", "peace", 9]
];

/*enums.scenarios = [
    ["Сесть", "PROP_HUMAN_SEAT_BENCH"],
    ["Записать в блокнот", "CODE_HUMAN_MEDIC_TIME_OF_DEATH"],
    ["Регулировщик (Полиция)", "CODE_HUMAN_POLICE_CROWD_CONTROL"],
    ["Осмотреть землю (Полиция)", "CODE_HUMAN_POLICE_INVESTIGATE"],
    ["Фоткать на фотоаппарат", "WORLD_HUMAN_PAPARAZZI"],
    ["Осмотреть труп", "CODE_HUMAN_MEDIC_TEND_TO_DEAD"],
    ["Кофе в руках", "WORLD_HUMAN_AA_COFFEE"],
    ["Курить сигарету", "WORLD_HUMAN_AA_SMOKE"],
    ["Курить траву", "WORLD_HUMAN_DRUG_DEALER"],
    ["Смотреть в бинокль", "WORLD_HUMAN_BINOCULARS"],
    ["Стоять с табличкой", "WORLD_HUMAN_BUM_FREEWAY"],
    ["Спать", "WORLD_HUMAN_BUM_SLUMPED"],
    ["Мыть руки в озере", "WORLD_HUMAN_BUM_WASH"],
    ["Регулировщик", "WORLD_HUMAN_CAR_PARK_ATTENDANT"],
    ["Хлопать", "WORLD_HUMAN_CHEERING"],
    ["Читать документ", "WORLD_HUMAN_CLIPBOARD"],
    ["Руки на поясе", "WORLD_HUMAN_COP_IDLES"],
    ["Пить пиво", "WORLD_HUMAN_DRINKING"],
    ["Сфоткать на телефон", "WORLD_HUMAN_MOBILE_FILM_SHOCKING"],
    ["Садовник - Убирать листья", "WORLD_HUMAN_GARDENER_LEAF_BLOWER"],
    ["Садовник - Сажать", "WORLD_HUMAN_GARDENER_PLANT"],
    ["Высматривать", "WORLD_HUMAN_GUARD_PATROL"],
    ["Охрана", "WORLD_HUMAN_GUARD_STAND"],
    ["Смотреть", "WORLD_HUMAN_HANG_OUT_STREET"],
    ["Позировать", "WORLD_HUMAN_HUMAN_STATUE"],
    ["Со шваброй", "WORLD_HUMAN_JANITOR"],
    ["Бежать на месте", "WORLD_HUMAN_JOG_STANDING"],
    ["Облокотиться на стену", "WORLD_HUMAN_LEANING"],
    ["Мыть", "WORLD_HUMAN_MAID_CLEAN"],
    ["Качок", "WORLD_HUMAN_MUSCLE_FLEX"],
    ["Играть на инструменте", "WORLD_HUMAN_MUSICIAN"],
    ["Фоткать на фотоаппарат", "WORLD_HUMAN_PAPARAZZI"],
    ["Пить пиво", "WORLD_HUMAN_PARTYING"],
    ["Сесть (Полулёжа)", "WORLD_HUMAN_PICNIC"],
    ["Проститутка - Курить", "WORLD_HUMAN_PROSTITUTE_HIGH_CLASS"],
    ["Проститутка", "WORLD_HUMAN_PROSTITUTE_LOW_CLASS"],
    ["Отжиматься", "WORLD_HUMAN_PUSH_UPS"],
    ["Искать с фонариком", "WORLD_HUMAN_SECURITY_SHINE_TORCH"],
    ["Делать пресс", "WORLD_HUMAN_SIT_UPS"],
    ["Курить 1", "WORLD_HUMAN_SMOKING"],
    ["Курить 2", "WORLD_HUMAN_SMOKING_POT"],
    ["Греться у костра", "WORLD_HUMAN_STAND_FIRE"],
    ["Стоять покачиваясь 1", "WORLD_HUMAN_STAND_IMPATIENT"],
    ["Стоять покачиваясь 2", "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT"],
    ["Лазить в телефоне 1", "WORLD_HUMAN_STAND_MOBILE"],
    ["Лазить в телефоне 2", "WORLD_HUMAN_STAND_MOBILE_UPRIGHT"],
    ["Танцевать", "WORLD_HUMAN_STRIP_WATCH_STAND"],
    ["Сесть полулёжа", "WORLD_HUMAN_STUPOR"],
    ["Лечь на живот", "WORLD_HUMAN_SUNBATHE"],
    ["Лечь на спину", "WORLD_HUMAN_SUNBATHE_BACK"],
    ["Теннис", "WORLD_HUMAN_TENNIS_PLAYER"],
    ["Смотреть карту", "WORLD_HUMAN_TOURIST_MAP"],
    ["Смотреть в телефон", "WORLD_HUMAN_TOURIST_MOBILE"],
    ["Смотреть", "WORLD_HUMAN_WINDOW_SHOP_BROWSE"],
    ["Йога", "WORLD_HUMAN_YOGA"],
    ["Готовить на гриле", "PROP_HUMAN_BBQ"],
    ["Что-то искать в ящике", "PROP_HUMAN_BUM_BIN"],
    ["Оплатить за парковку", "PROP_HUMAN_PARKING_METER"],
    ["Смотреть по сторонам", "CODE_HUMAN_CROSS_ROAD_WAIT"],
    ["Высматривать", "CODE_HUMAN_MEDIC_KNEEL"]
];*/

enums.loadCloth = function () {
    updateCloth().then( (returnCloth) => {
        try {
            enums.overlays = returnCloth[0];
            enums.clothM = returnCloth[1];
            enums.clothF = returnCloth[2];
            enums.propM = returnCloth[3];
            enums.propF = returnCloth[4];
        } catch (e) {
            console.log(e);
            throw e;
        }
    });

    updateTattoo().then( (returnCloth) => {
        try {
            enums.tattooList = returnCloth[0];
            enums.tprint = returnCloth[1];
            enums.fractionListId = JSON.parse(returnCloth[2]);
        } catch (e) {
            console.log(e);
            throw e;
        }
    });
};

export default enums;