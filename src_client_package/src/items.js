let items = {};

items.defaultModelHash = 1108364521;

/*Имя, хеш объекта, может экипировать, вес, объем (ширина * на длинну * на высоту) */
let ItemList = [
    ["Верёвка", "", false, -1145063624, 1000, 4000], //0
    ["Мешок", "", false, -1194335261, 100, 2400], //1
    ["Кокаин", "", false, 1808635348, 1, 1], //2
    ["Лечебная марихуана", "", false, 671777952, 1, 5], //3
    ["Отмычка", "", false, -1803909274, 50, 6], //4
    ["Масло", "", false, -1532806025, 3000, 10000], //5
    ["Набор инструментов", "", false, 648185618, 4500, 12800], //6
    ["Электронные часы \"AppiWatch\"", "", true, 1169295068, 190, 110], //7
    ["Телефон", "", true, -1038739674, 120, 156], //8
    ["Канистра", "PetrolCan", false, 1069395324, 10000, 11300], //9
    ["Жвачка", "", false, 936464539, 20, 20], //10
    ["Баттончик \"Pluto\"", "", false, 936464539, 60, 30], //11
    ["Чипсы \"AppiPot\"", "", false, 936464539, 100, 1500], //12
    ["Упаковка Роллов", "", false, 936464539, 290, 2000], //13
    ["Гамбургер", "", false, 936464539, 190, 500], //14
    ["Салат Цезарь", "", false, 936464539, 200, 2000], //15
    ["Пицца", "", false, 936464539, 550, 7000], //16
    ["Жаркое", "", false, 936464539, 450, 2000], //17
    ["Кесадилья", "", false, 936464539, 2000, 2000], //18
    ["Фрикасе из кролика", "", false, 936464539, 575, 2000], //19
    ["Фрукты", "", false, 936464539, 180, 1000], //20
    ["Вода", "", false, 746336278, 330, 3500], //21
    ["Кофе", "", false, 746336278, 400, 4000], //22
    ["Чай", "", false, 746336278, 330, 3500], //23
    ["Лимонад", "", false, 746336278, 330, 3500], //24
    ["Кока-Кола", "", false, 746336278, 250, 2500], //25
    ["Энергетик", "", false, 746336278, 250, 2500], //26

    ["Коробка патронов 9mm (Пистолет)", "", true, 190687980, 1140, 432], //27 / 140
    ["Коробка патронов 18.5mm", "", true, 1560006187, 2420, 1024], //28 / 120
    ["Коробка патронов 7.62mm", "", true, 669213687, 2580, 686], //29 / 130
    ["Коробка патронов 5.56mm", "", true, 1843823183, 3620, 1568], //30 / 260

    ["Адреналин", "", false, -1282296755, 50, 6], // 31
    ["Сухпаек", "", false, 9168982, 2000, 5800], // 32
    ["Уголь", "", false, -756465278, 40, 6], // 33
    ["Сироп", "", false, -756465278, 75, 3], // 34
    ["Cосудосуживающий таблетка", "", false, -756465278, 30, 6], // 35
    ["Таблетка от кашля", "", false, -756465278, 40, 6], // 36
    ["Витаминки", "", false, -756465278, 55, 6], // 37
    ["Жаропонижающий", "", false, -756465278, 35, 6], // 38
    ["Антибиотик", "", false, -756465278, 35, 6], // 39
    ["Наручники", "", false, -1281059971, 340, 120], // 40
    ["Ключ от тс", "", false, 977923025, 6, 3], // 41
    ["Ключ от офиса", "", true, -331172978, 6, 3], // 42
    ["Ключ от дома", "", true, -331172978, 6, 3],  // 43
    ["Ключ от квартиры", "", true, -331172978, 6, 3], // 44
    ["Маска", "", true, 9168982, 650, 2800], // 45
    ["Одежда", "", false, 9168982, 650, 3800], //46
    ["Рация", "", false, -1964402432, 250, 170], // 47
    ["Кошелёк", "", false, -34897201, 120, 150], // 48
    ["Письма", "", false, 406712611, 80, 410], // 49
    ["Банковская карта", "", true, -1282513796, 15, 8], // 50
    ["Паспорт", "", false, -1750183478, 40, 16], // 51
    ["Лицензия", "", false, -925658112, 30, 116], // 52
    ["Удостоверение", "", false, -1595369626, 15, 8], // 53

    ["Кавалерийский кинжал", "weapon_dagger", true, 1725061196, 400, 450,], // 54
    ["Бейсбольная бита", "weapon_bat", true, 1742452667, 1500, 2000], // 55
    ["Боевой топор", "weapon_battleaxe", true, 2133533553, 2200, 2400], // 56
    ["Розочка", "weapon_bottle", true, -789123952, 110, 540], // 57
    ["Лом", "weapon_crowbar", true, 1862268168, 3200, 1050], // 58
    ["Фонарик", "weapon_flashlight", true, 211760048, 340, 400], // 59
    ["Клюшка для гольфа", "weapon_golfclub", true, -580196246, 2900, 1150], // 60
    ["Молоток", "weapon_hammer", true, 64104227, 860, 430], // 61
    ["Топорик", "weapon_hatchet", true, 1653948529, 930, 860], // 62
    ["Нож", "weapon_knife", true, -1982443329, 560, 520], // 63
    ["Кастет", "weapon_knuckle", true, -1803909274, 450, 80], // 64
    ["Мачете", "weapon_machete", true, -2055486531, 1120, 525], // 65
    ["Полицейская дубинка", "weapon_nightstick", true, -1634978236, 880, 970], // 66
    ["Разводной ключ", "weapon_wrench", true, 10555072, 1760, 1490], // 67
    ["Бильярдный кий", "weapon_poolcue", true, -1982443329, 470, 160], // 68
    ["Выкидной нож", "weapon_switchblade", true, 1653948529, 130, 60], // 69

    ["Сolt SCAMP", "weapon_appistol", true, 905830540, 1500, 950], // 70
    ["P99", "weapon_combatpistol", true, 403140669, 800, 660], // 71
    ["Сигнальный пистолет", "weapon_flaregun", true, 1349014803, 440, 270], // 72
    ["Remington 1911", "weapon_heavypistol", true, 1927398017, 1120, 850], // 73
    ["Raging Bull", "weapon_revolver", true, 1430410579, 1440, 1080], // 74
    ["Raging Bull Mk II", "weapon_revolver_mk2", true, 1430410579, 1990, 1080], // 75
    ["Contender G2", "weapon_marksmanpistol", true, 1430410579, 1360, 1800], // 76
    ["Taurus PT92", "weapon_pistol", true, 1467525553, 950, 1230], // 77
    ["Beretta 90Two", "weapon_pistol_mk2", true, 1430410579, 920, 1050], // 78
    ["Desert Eagle", "weapon_pistol50", true, -178484015, 1700, 1720], // 79
    ["HK P7M10", "weapon_snspistol", true, 339962010, 785, 660], // 80
    ["Colt Junior", "weapon_snspistol_mk2", true, 1430410579, 365, 310], // 81
    ["Шокер", "weapon_stungun", true, 1609356763, 760, 680], // 82
    ["FN Model 1922", "weapon_vintagepistol", true, -1124046276, 700, 720], // 83
    ["Colt New Service", "weapon_doubleaction", true, 1430410579, 1450, 1170], // 84

    ["UTS-15", "weapon_assaultshotgun", true, 1255410010, 2800, 11500], // 85
    ["KSG 12", "weapon_bullpupshotgun", true, -1598212834, 3100, 9500], // 86
    ["Обрез", "weapon_dbshotgun", true, -1920611843, 1410, 1800], // 87
    ["Сайга-12К", "weapon_heavyshotgun", true, -1209868881, 3500, 10900], // 88
    ["Land Pattern Musket", "weapon_musket", true, 1652015642, 4300, 14400], // 89
    ["Benelli M3", "weapon_pumpshotgun", true, 689760839, 4500, 16100], // 90
    ["Benelli M4", "weapon_pumpshotgun_mk2", true, 798951501, 3500, 17600], // 91
    ["Mossberg 500", "weapon_sawnoffshotgun", true, -675841386, 2100, 3800], // 92
    ["Protecta", "weapon_autoshotgun", true, -1920611843, 2900, 6800], // 93

    ["P-90", "weapon_assaultsmg", true, -473574177, 2800, 8800], // 94
    ["Mk 48", "weapon_combatmg", true, -739394447, 8000, 16000], // 95
    ["HK MG4", "weapon_combatmg_mk2", true, 798951501, 8150, 17600], // 96
    ["SIG MPX-SD", "weapon_combatpdw", true, -1393014804, 2700, 5000], // 97
    ["Thompson M1918A1", "weapon_gusenberg", true, 574348740, 8400, 18400], // 98
    ["Intratec TEC-9", "weapon_machinepistol", true, 1430410579, 1500, 1660], // 99
    ["ПКП «Печенег»", "weapon_mg", true,-2056364402, 8200, 17250], // 100
    ["Mini Uzi", "weapon_microsmg", true, -1056713654, 2650, 2500], // 101
    ["Scorpion vz.61", "weapon_minismg", true, 1430410579, 2000, 1900], // 102
    ["MP5A3", "weapon_smg", true, -500057996, 3200, 7800], // 103
    ["MP5K", "weapon_smg_mk2", true, -1920611843, 3350, 8100], // 104

    ["TAR-21", "weapon_advancedrifle", true, -1707584974, 3270, 12400], // 105
    ["AK-102", "weapon_assaultrifle", true, 273925117, 3200, 14700], // 106
    ["AK-103", "weapon_assaultrifle_mk2", true, 798951501, 3600, 16200], // 107
    ["QBZ-97", "weapon_bullpuprifle", true, -1288559573, 3250, 13500], // 108
    ["QBZ-95", "weapon_bullpuprifle_mk2", true, 798951501, 3350, 13900], // 109
    ["HK-416", "weapon_carbinerifle", true, 1026431720, 3490, 14200], // 110
    ["HK-416A5", "weapon_carbinerifle_mk2", true, 798951501, 3560, 14900], // 111
    ["AKS-74u", "weapon_compactrifle", true, -1920611843, 2400, 5700], // 112
    ["G36C", "weapon_specialcarbine", true, -1745643757, 2980, 12000], // 113
    ["G36KV", "weapon_specialcarbine_mk2", true, 798951501, 3370, 13900], // 114

    ["M107", "weapon_heavysniper", true, -746966080, 13500, 21000], // 115
    ["XM109", "weapon_heavysniper_mk2", true, 798951501, 14000, 24500], // 116
    ["M14 EBR", "weapon_marksmanrifle", true, -1711248638, 5100, 17800], // 117
    ["SOCOM 16", "weapon_marksmanrifle_mk2", true, 798951501, 5900, 18200], // 118
    ["L115A3", "weapon_sniperrifle", true, 346403307, 6600, 14400], // 119

    ["M79", "weapon_compactlauncher", true, -1920611843, 50, 2050], // 120
    ["Пиротехническая установка", "weapon_firework", true, 491091384, 8500, 29000], // 121
    ["M32 MGL", "weapon_grenadelauncher", true, -606683246, 5300, 19500], // 122
    ["FIM 92 Stinger", "weapon_hominglauncher", true, 1901887007, 13500, 29000], // 123
    ["M134", "weapon_minigun", true, 422658457, 30000, 50000], // 124
    ["Рельсовое оружие", "weapon_railgun", true, -1876506235, 14900, 22500], // 125
    ["РПГ-7", "weapon_rpg", true, -218858073, 6000, 46000], // 126

    ["Мяч", "weapon_ball", true, -383950123, 250, 310], // 127
    ["Дымовая гранта", "weapon_smokegrenade", true, -1936212109, 690, 485], // 128
    ["Сигнальный огонь", "weapon_flare", true, -1564193152, 250, 180], // 129
    ["Граната", "weapon_grenade", true, 290600267, 890, 410], // 130
    ["Коктейль Молотова", "weapon_molotov", true, -880609331, 660, 720], // 131
    ["Неконтактная мина", "weapon_proxmine", true, 1876445962, 850, 1200], // 132
    ["Самодельная бомба", "weapon_pipebomb", true, 848107085, 430, 180], // 133
    ["Снежок", "weapon_snowball", true, 1297482736, 250, 310], // 134
    ["Бомба-липучка", "weapon_stickybomb", true, -1110203649, 750, 1200], // 135
    ["Слезоточивый газ", "weapon_bzgas", true, 1591549914, 690, 485], // 136

    ["Парашют", "gadget_parachute", true, -1679378668, 3200, 7500], // 137

    ["Купюра 1$", "", true, 1814532926, 1, 1], // 138
    ["Купюра 100$", "", true, 1597489407, 1, 1], // 139
    ["Маленькая пачка 100$", "", true, -1170050911, 100, 100], // 110
    ["Большая пачка 100$", "", true, -1448063107, 300, 300], // 141

    ["Упаковка кокаина 1кг", "", false, 525896218, 1000, 1000], // 142
    ["Упаковка марихуаны 200г", "", false, -395076527, 200, 1000], // 143
    ["Упаковка кокаина 5кг", "", false, -1688127, 5000, 5000], // 144
    ["Упаковка марихуаны 800г", "", false, -680115871, 800, 4000], // 145

    ["Коробка патронов 12.7mm", "", true, 1843823183, 8900, 1568], //146 / 60
    ["Коробка патронов сингального пистолета", "", true, 1843823183, 1600, 1568], //147 / 10
    ["Коробка патронов феерверка", "", true, 1843823183, 1600, 1568], //148 / 1
    ["Коробка патронов RPG", "", true, 1843823183, 2200, 1568], //149 / 120
    ["Коробка патронов", "", true, 1843823183, 3800, 1568], //150 / 10
    ["Коробка подствольных гранат", "", true, 1843823183, 3800, 1568], //151 / 10
    ["Коробка патронов Stinger", "", true, 1843823183, 1500, 1568], //152 / 1
    ["Коробка патронов 9mm (SMG)", "", true, 190687980, 1140, 432], //153 / 140

    ["Кокаин (10гр)", "", false, 1808635348, 10, 10], //154
    ["Лечебная марихуана (10гр)", "", false, 671777952, 10, 50], //155

    ["Кокаин (50гр)", "", false, 1808635348, 50, 50], //156
    ["Лечебная марихуана (50гр)", "", false, 671777952, 50, 250], //157

    ["Амфетамин", "", false, 1808635348, 1, 1], //158
    ["DMT", "", false, 1808635348, 1, 1], //159
    ["Мефедрон", "", false, 1808635348, 1, 1], //160
    ["Кетамин", "", false, 671777952, 1, 5], //161
    ["LSD", "", false, 671777952, 1, 5], //162

    ["Упаковка амфетамина 1кг", "", false, 525896218, 1000, 1000], // 163
    ["Упаковка амфетамина 5кг", "", false, -1688127, 5000, 5000], // 164

    ["Упаковка DMT 1кг", "", false, 525896218, 1000, 1000], // 165
    ["Упаковка DMT 5кг", "", false, -1688127, 5000, 5000], // 166

    ["Упаковка мефедрона 1кг", "", false, 525896218, 1000, 1000], // 167
    ["Упаковка мефедрона 5кг", "", false, -1688127, 5000, 5000], // 168

    ["Упаковка кетамина 1кг", "", false, 1430410579, 1000, 3000], // 169
    ["Упаковка LSD 1кг", "", false, 1430410579, 1000, 3000], // 170

    ["Амфетамин (10гр)", "", false, 1808635348, 10, 10], //171
    ["DMT (10гр)", "", false, 1808635348, 10, 10], //172
    ["Мефедрон (10гр)", "", false, 1808635348, 10, 10], //173
    ["Кетамин (10гр)", "", false, 671777952, 10, 50], //174
    ["LSD (10гр)", "", false, 671777952, 10, 50], //175

    ["Амфетамин (50гр)", "", false, 1808635348, 50, 50], //176
    ["DMT (50гр)", "", false, 1808635348, 50, 50], //177
    ["Мефедрон (50гр)", "", false, 1808635348, 50, 50], //178
    ["Кетамин (50гр)", "", false, 671777952, 50, 250], //179
    ["LSD (50гр)", "", false, 671777952, 50, 250], //180

    ["Деревянный ящик Gray Tea", "", false, -1147461795, 15000, 500000], //181
    ["Коробка Листов A4", "", false, 1465830963, 2500, 40000], //182
    ["Коробка Redwood", "", false, 1465830963, 2500, 35000], //183
    ["Коробка Clucking Bell", "", false, 250374685, 15000, 70000], //184
    ["Коробка Jo Jo diet Cola", "", false, -1244905398, 8000, 25000], //185
    ["Коробка Craft", "", false, -517243780, 40000, 70000], //186
    ["Коробка Fish and Roll", "", false, -1563678327, 60000, 450000], //187
    ["Деревянный ящик GoPostal", "", false, -1649986476, 19000, 300000], //188
    ["Огромная деревянный ящик", "", false, 1955876122, 420000, 5000000], //189
    ["Важная деревянный ящик", "", false, 307713837, 120000, 1250000], //190
    ["Коробка из китая", "", false, -1513883840, 35000, 450000], //191
    ["Важная коробка", "", false, -1438964996, 12000, 250000], //192
    ["Маленькая коробка", "", false, -721895765, 4000, 55000], //193

    ["Полосатая бочка", "", false, 546252211, 30000, 5000], //194
    ["Ограждение со стрелкой", "", false, 1867879106, 8000, 5000], //195
    ["Длинное ограждение", "", false, -205311355, 10000, 5000], //196
    ["Деревянное ограждение", "", false, 1072616162, 5000, 5000], //197
    ["Деревянное ограждение с огнём", "", false, 1329951119, 5000, 5000], //198
    ["Полицейское огорождение", "", false, -143315610, 9000, 5000], //199
    ["Длинный полосатый конус", "", false, 939377219, 1000, 3000], //200
    ["Полосатый конус", "", false, 1245865676, 1000, 3000], //201
    ["Красный конус", "", false, 862664990, 1000, 3000], //202
    ["Длинный конус с огнями", "", false, -1587301201, 1000, 3000], //203

    ["Капсула с таблетками", "", false, -2127785247, 50, 25], //204
    ["Огромная стекляная бутыль", "", false, -1382355819, 3000, 6750], //205
    ["Капсула с таблетками", "", false, -756465278, 50, 30], //206
    ["Бутыль", "", false, 393961710, 250, 250], //207
    ["Сироп", "", false, 1648892290, 120, 170], //208
    ["Большая стекляная банка", "", false, 566302905, 1500, 4200], //209
    ["Стекляная банка", "", false, -2034834785, 500, 1400], //210
    ["Контейнер с пробирками", "", false, -330775550, 4500, 6000], //211
    ["Контейнер для пробирок", "", false, -192665395, 2000, 6000], //212
    ["Пробирка", "", false, -2022085894, 500, 60], //213
    ["Шприц", "", false, -61966571, 50, 6], //214
    ["Аптечка", "", false, 678958360, 500, 880], //215
    ["Бинт", "", false, 546339338, 70, 280], //216
    ["Большой бинт", "", false, 580223600, 120, 410], //217
    ["Таблетки", "", false, -1129328507, 20, 10], //218
    ["Бутыль с перекисью водорода", "", false, 1254553771, 3000, 8000], //219
    ["Упаковка таблеток", "", false, 1787587532, 50, 130], //220
    ["Антипохмелин", "", false, 1547095841, 12, 130], //221
    ["Упаковка таблеток", "", false, 1174512311, 50, 130], //222

    ["Сырое мясо кабана", "", false, 936464539, 4000, 10000], //223 a_c_boar
    ["Сырое мясо ястреба", "", false, 936464539, 300, 2000], //224 a_c_chickenhawk
    ["Сырое мясо коровы", "", false, 936464539, 4000, 10000], //225 a_c_cow
    ["Сырое мясо баклана", "", false, 936464539, 290, 1500], //226 a_c_cormorant
    ["Сырое мясо оленя", "", false, 936464539, 4000, 15000], //227 a_c_deer
    ["Сырое мясо курицы", "", false, 936464539, 290, 1500], //228 a_c_hen
    ["Сырое мясо свиньи", "", false, 936464539, 4000, 10000], //229 a_c_pig
    ["Сырое мясо кролика", "", false, 936464539, 500, 3000], //230 a_c_rabbit_01
    ["Сырое мясо крысы", "", false, 936464539, 50, 500], //231 a_c_rat

    ["Мясо кабана", "", false, 936464539, 4000, 10000], //232
    ["Мясо ястреба", "", false, 936464539, 300, 2000], //233
    ["Мясо коровы", "", false, 936464539, 4000, 10000], //234
    ["Мясо баклана", "", false, 936464539, 290, 1500], //235
    ["Мясо оленя", "", false, 936464539, 4000, 12000], //236
    ["Мясо курицы", "", false, 936464539, 290, 1500], //237
    ["Мясо свиньи", "", false, 936464539, 4000, 10000], //238
    ["Мясо кролика", "", false, 936464539, 500, 3000], //239
    ["Мясо крысы", "", false, 936464539, 100, 1000], //240

    ["Сырое мясо тунца", "", false, 936464539, 1000, 3000], //241
    ["Сырое мясо окуня", "", false, 936464539, 300, 800], //242
    ["Сырое мясо краба", "", false, 936464539, 600, 4000], //243
    ["Сырое мясо лосося", "", false, 936464539, 290, 1000], //244
    ["Сырое мясо креветок", "", false, 936464539, 290, 600], //245

    ["Мясо тунца", "", false, 936464539, 1000, 3000], //246
    ["Мясо окуня", "", false, 936464539, 300, 800], //247
    ["Мясо краба", "", false, 936464539, 600, 4000], //248
    ["Мясо лосося", "", false, 936464539, 290, 1000], //249
    ["Мясо креветок", "", false, 936464539, 290, 600], //250

    ["Удочка", "", false, 1338703913, 3560, 14900], //251
    ["Бронежилет", "", false, 701173564, 3560, 14900], //252
    ["Игральные кости", "", false, -1803909274, 50, 6], //253

    ["Маленький розовый член", "", false, -422877666, 250, 195], //254
    ["Красный вибратор ", "", false, -463441113, 450, 440], //255
    ["Фиолетовый член", "", false, -731262150, 330, 290], //256
    ["Кожаный член", "", false, -1980613044, 320, 285], //257
    ["Позолоченный член", "", false, 2009373169, 390, 180], //258
    ["Металлический член", "", false, -1921596075, 390, 180], //259
    ["Большой резиновый член", "", false, 1333481871, 950, 2100], //260
    ["Анальная смазка", "", false, 1553232197, 250, 540], //261

    ["C4 (Мощная)", "StickyBomb", false, -1110203649, 750, 1200], //262
    ["Специальная отмычка", "", false, -1803909274, 50, 6], //263
    ["Маска", "", true, -1211793417, 400, 1350], //264
    ["Одежда", "", true, -1158162337, 2000, 4500], //265
    ["Штаны", "", true, -1158162337, 2000, 4500], //266
    ["Обувь", "", true, 101151147, 1500, 3000], //267
    ["Аксессуар", "", true, 1267833770, 400, 1200], //268

    ["Головной убор", "", true, 1267833770, 500, 1500], //269
    ["Очки", "", true, 1298569174, 200, 350], //270
    ["Серьги", "", true,1267833770, 150, 90], //271
    ["Часы", "", true, 1267833770, 250, 300], //272
    ["Браслет", "", true, 1267833770, 250, 300], //273
    ["Маска", "", true, 1267833770, 400, 1200], //274

    ["Коробка отмычек", "", false, 1267833770, 500, 60], //275
    ["Коробка спец. отмычек", "", false, 1267833770, 1500, 180], //276

    ["Лотерейный билет", "", false, 406712611, 80, 410], //277
    ["Спец. Аптечка", "", false, 678958360, 500, 880], //278

    ["Коробка патронов", "", true, 1843823183, 3800, 1568], //279 / 10
    ["Коробка патронов 9mm", "", true, 190687980, 1140, 432], //280 / 140
    ["Коробка патронов 12 калибра", "", true, 1560006187, 2420, 1024], //281 / 120
    ["Коробка патронов 7.62mm", "", true, 669213687, 2580, 686], //282 / 130
    ["Коробка патронов 5.45mm", "", true, 1843823183, 3620, 1568], //283 / 260
    ["Коробка патронов 5.56mm", "", true, 1843823183, 3620, 1568], //284 / 260
    ["Коробка патронов 12.7mm", "", true, 1843823183, 8900, 1568], //285 / 60
    ["Коробка патронов .45 ACP", "", true, 1843823183, 8900, 1568], //286 / 60
    ["Коробка патронов .44 Magnum", "", true, 1843823183, 8900, 1568], //287 / 60

    ["Коробка патронов сингального пистолета", "", true, 1843823183, 1600, 1568], //288 / 10
    ["Коробка патронов феерверка", "", true, 1843823183, 1600, 1568], //289 / 1
    ["Коробка подствольных гранат", "", true, 1843823183, 3800, 1568], //290 / 10
    ["Коробка патронов RPG", "", true, 1843823183, 2200, 1568], //291 / 1
    ["Коробка патронов Stinger", "", true, 1843823183, 1500, 1568], //292 / 1
];

items.canEquipById = function(id)
{
    try
    {
        return ItemList[id][2];
    }
    catch
    {
        return false;
    }
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