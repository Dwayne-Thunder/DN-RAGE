let items = exports;

items.itemList = [
    /*Имя, хеш объекта, может экипировать, вес, объем (ширина * на длинну * на высоту) */
    ["Верёвка", "", 0, -1145063624, 1000, 4000], //0
    ["Мешок", "", 0, -1194335261, 100, 2400], //1
    ["Кокаин", "", 0, 1808635348, 1, 1], //2
    ["Лечебная марихуана", "", 0, 671777952, 1, 5], //3
    ["Отмычка", "", 0, -1803909274, 50, 6], //4
    ["Масло", "", 0, -1532806025, 3000, 10000], //5
    ["Набор инструментов", "", 0, 648185618, 4500, 12800], //6
    ["Электронные часы \"AppiWatch\"", "", 0, 1169295068, 190, 110], //7
    ["Канистра (Авиатопливо)", "weapon_petrolcan", 0, 1069395324, 10000, 11300], //8
    ["Канистра (Бензин)", "weapon_petrolcan", 0, 1069395324, 10000, 11300], //9
    ["Канистра (Дизель)", "weapon_petrolcan", 0, 1069395324, 10000, 11300], //10
    ["Баттончик \"Pluto\"", "", 0, 936464539, 60, 30], //11
    ["Чипсы \"AppiPot\"", "", 0, 936464539, 100, 1500], //12
    ["Упаковка Роллов", "", 0, 936464539, 290, 2000], //13
    ["Гамбургер", "", 0, 936464539, 190, 500], //14
    ["Салат Цезарь", "", 0, 936464539, 200, 2000], //15
    ["Пицца", "", 0, 936464539, 550, 7000], //16
    ["Жаркое", "", 0, 936464539, 450, 2000], //17
    ["Кесадилья", "", 0, 936464539, 2000, 2000], //18
    ["Фрикасе из кролика", "", 0, 936464539, 575, 2000], //19
    ["Фрукты", "", 0, 936464539, 180, 1000], //20
    ["Вода", "", 0, 746336278, 330, 3500], //21
    ["Кофе", "", 0, 746336278, 400, 4000], //22
    ["Чай", "", 0, 746336278, 330, 3500], //23
    ["Лимонад", "", 0, 746336278, 330, 3500], //24
    ["Кока-Кола", "", 0, 746336278, 250, 2500], //25
    ["Энергетик", "", 0, 746336278, 250, 2500], //26

    ["Телефон IFruit", "", 0, -1038739674, 120, 156], //27
    ["Телефон Facade", "", 0, 1907022252, 120, 156], //28
    ["Телефон Badger", "", 0, -2017357667, 120, 156], //29
    ["Телефон IFruit", "", 0, -1038739674, 120, 156], //30

    ["Адреналин", "", 0, -1282296755, 50, 6], // 31
    ["Сухпаек", "", 0, 9168982, 2000, 5800], // 32
    ["Уголь", "", 0, -756465278, 40, 6], // 33
    ["Сироп", "", 0, -756465278, 75, 3], // 34
    ["Cосудосуживающий таблетка", "", 0, -756465278, 30, 6], // 35
    ["Таблетка от кашля", "", 0, -756465278, 40, 6], // 36
    ["Витаминки", "", 0, -756465278, 55, 6], // 37
    ["Жаропонижающий", "", 0, -756465278, 35, 6], // 38
    ["Антибиотик", "", 0, -756465278, 35, 6], // 39
    ["Наручники", "", 0, -1281059971, 340, 120], // 40
    ["Ключ от тс", "", 0, 977923025, 6, 3], // 41
    ["Ключ от офиса", "", 0, -331172978, 6, 3], // 42
    ["Ключ от дома", "", 0, -331172978, 6, 3],  // 43
    ["Ключ от квартиры", "", 0, -331172978, 6, 3], // 44
    ["Маска", "", 0, 9168982, 650, 2800], // 45
    ["Одежда", "", 0, 9168982, 650, 3800], //46
    ["Рация", "", 0, -1964402432, 250, 170], // 47
    ["Кошелёк", "", 0, -34897201, 120, 150], // 48
    ["Письма", "", 0, 406712611, 80, 410], // 49
    ["Банковская карта", "", 0, -1282513796, 15, 8], // 50
    ["Паспорт", "", 0, -1750183478, 40, 16], // 51
    ["Лицензия", "", 0, -925658112, 30, 116], // 52
    ["Удостоверение", "", 0, -1595369626, 15, 8], // 53

    ["Кавалерийский кинжал", "weapon_dagger", 0, 1725061196, 400, 450,], // 54
    ["Бейсбольная бита", "weapon_bat", 0, 1742452667, 1500, 2000], // 55
    ["Боевой топор", "weapon_battleaxe", 0, 2133533553, 2200, 2400], // 56
    ["Розочка", "weapon_bottle", 0, -789123952, 110, 540], // 57
    ["Лом", "weapon_crowbar", 0, 1862268168, 3200, 1050], // 58
    ["Фонарик", "weapon_flashlight", 0, 211760048, 340, 400], // 59
    ["Клюшка для гольфа", "weapon_golfclub", 0, -580196246, 2900, 1150], // 60
    ["Молоток", "weapon_hammer", 0, 64104227, 860, 430], // 61
    ["Топорик", "weapon_hatchet", 0, 1653948529, 930, 860], // 62
    ["Нож", "weapon_knife", 0, -1982443329, 560, 520], // 63
    ["Кастет", "weapon_knuckle", 0, -1803909274, 450, 80], // 64
    ["Мачете", "weapon_machete", 0, -2055486531, 1120, 525], // 65
    ["Полицейская дубинка", "weapon_nightstick", 0, -1634978236, 880, 970], // 66
    ["Разводной ключ", "weapon_wrench", 0, 10555072, 1760, 1490], // 67
    ["Бильярдный кий", "weapon_poolcue", 0, -1982443329, 470, 160], // 68
    ["Выкидной нож", "weapon_switchblade", 0, 1653948529, 130, 60], // 69

    ["Сolt SCAMP", "weapon_appistol", 0, 905830540, 1500, 950], // 70
    ["P99", "weapon_combatpistol", 0, 403140669, 800, 660], // 71
    ["Сигнальный пистолет", "weapon_flaregun", 0, 1349014803, 440, 270], // 72
    ["Remington 1911", "weapon_heavypistol", 0, 1927398017, 1120, 850], // 73
    ["Raging Bull", "weapon_revolver", 0, 1430410579, 1440, 1080], // 74
    ["Raging Bull Mk II", "weapon_revolver_mk2", 0, 1430410579, 1990, 1080], // 75
    ["Contender G2", "weapon_marksmanpistol", 0, 1430410579, 1360, 1800], // 76
    ["Taurus PT92", "weapon_pistol", 0, 1467525553, 950, 1230], // 77
    ["Beretta 90Two", "weapon_pistol_mk2", 0, 1430410579, 920, 1050], // 78
    ["Desert Eagle", "weapon_pistol50", 0, -178484015, 1700, 1720], // 79
    ["HK P7M10", "weapon_snspistol", 0, 339962010, 785, 660], // 80
    ["Colt Junior", "weapon_snspistol_mk2", 0, 1430410579, 365, 310], // 81
    ["Шокер", "weapon_stungun", 0, 1609356763, 760, 680], // 82
    ["FN Model 1922", "weapon_vintagepistol", 0, -1124046276, 700, 720], // 83
    ["Colt New Service", "weapon_doubleaction", 0, 1430410579, 1450, 1170], // 84

    ["UTS-15", "weapon_assaultshotgun", 0, 1255410010, 2800, 11500], // 85
    ["KSG 12", "weapon_bullpupshotgun", 0, -1598212834, 3100, 9500], // 86
    ["Обрез", "weapon_dbshotgun", 0, -1920611843, 1410, 1800], // 87
    ["Сайга-12К", "weapon_heavyshotgun", 0, -1209868881, 3500, 10900], // 88
    ["Land Pattern Musket", "weapon_musket", 0, 1652015642, 4300, 14400], // 89
    ["Benelli M3", "weapon_pumpshotgun", 0, 689760839, 4500, 16100], // 90
    ["Benelli M4", "weapon_pumpshotgun_mk2", 0, 798951501, 3500, 17600], // 91
    ["Mossberg 500", "weapon_sawnoffshotgun", 0, -675841386, 2100, 3800], // 92
    ["Protecta", "weapon_autoshotgun", 0, -1920611843, 2900, 6800], // 93

    ["P-90", "weapon_assaultsmg", 0, -473574177, 2800, 8800], // 94
    ["Mk 48", "weapon_combatmg", 0, -739394447, 8000, 16000], // 95
    ["HK MG4", "weapon_combatmg_mk2", 0, 798951501, 8150, 17600], // 96
    ["SIG MPX-SD", "weapon_combatpdw", 0, -1393014804, 2700, 5000], // 97
    ["Thompson M1918A1", "weapon_gusenberg", 0, 574348740, 8400, 18400], // 98
    ["Intratec TEC-9", "weapon_machinepistol", 0, 1430410579, 1500, 1660], // 99
    ["ПКП «Печенег»", "weapon_mg", true,-2056364402, 8200, 17250], // 100
    ["Mini Uzi", "weapon_microsmg", 0, -1056713654, 2650, 2500], // 101
    ["Scorpion vz.61", "weapon_minismg", 0, 1430410579, 2000, 1900], // 102
    ["MP5A3", "weapon_smg", 0, -500057996, 3200, 7800], // 103
    ["MP5K", "weapon_smg_mk2", 0, -1920611843, 3350, 8100], // 104

    ["TAR-21", "weapon_advancedrifle", 0, -1707584974, 3270, 12400], // 105
    ["AK-102", "weapon_assaultrifle", 0, 273925117, 3200, 14700], // 106
    ["AK-103", "weapon_assaultrifle_mk2", 0, 798951501, 3600, 16200], // 107
    ["QBZ-97", "weapon_bullpuprifle", 0, -1288559573, 3250, 13500], // 108
    ["QBZ-95", "weapon_bullpuprifle_mk2", 0, 798951501, 3350, 13900], // 109
    ["HK-416", "weapon_carbinerifle", 0, 1026431720, 3490, 14200], // 110
    ["HK-416A5", "weapon_carbinerifle_mk2", 0, 798951501, 3560, 14900], // 111
    ["AKS-74u", "weapon_compactrifle", 0, -1920611843, 2400, 5700], // 112
    ["G36C", "weapon_specialcarbine", 0, -1745643757, 2980, 12000], // 113
    ["G36KV", "weapon_specialcarbine_mk2", 0, 798951501, 3370, 13900], // 114

    ["M107", "weapon_heavysniper", 0, -746966080, 13500, 21000], // 115
    ["XM109", "weapon_heavysniper_mk2", 0, 798951501, 14000, 24500], // 116
    ["M14 EBR", "weapon_marksmanrifle", 0, -1711248638, 5100, 17800], // 117
    ["SOCOM 16", "weapon_marksmanrifle_mk2", 0, 798951501, 5900, 18200], // 118
    ["L115A3", "weapon_sniperrifle", 0, 346403307, 6600, 14400], // 119

    ["M79", "weapon_compactlauncher", 0, -1920611843, 50, 2050], // 120
    ["Пиротехническая установка", "weapon_firework", 0, 491091384, 8500, 29000], // 121
    ["M32 MGL", "weapon_grenadelauncher", 0, -606683246, 5300, 19500], // 122
    ["FIM 92 Stinger", "weapon_hominglauncher", 0, 1901887007, 13500, 29000], // 123
    ["M134", "weapon_minigun", 0, 422658457, 30000, 50000], // 124
    ["Рельсовое оружие", "weapon_railgun", 0, -1876506235, 14900, 22500], // 125
    ["РПГ-7", "weapon_rpg", 0, -218858073, 6000, 46000], // 126

    ["Мяч", "weapon_ball", 0, -383950123, 250, 310], // 127
    ["Дымовая гранта", "weapon_smokegrenade", 0, -1936212109, 690, 485], // 128
    ["Сигнальный огонь", "weapon_flare", 0, -1564193152, 250, 180], // 129
    ["Граната", "weapon_grenade", 0, 290600267, 890, 410], // 130
    ["Коктейль Молотова", "weapon_molotov", 0, -880609331, 660, 720], // 131
    ["Неконтактная мина", "weapon_proxmine", 0, 1876445962, 850, 1200], // 132
    ["Самодельная бомба", "weapon_pipebomb", 0, 848107085, 430, 180], // 133
    ["Снежок", "weapon_snowball", 0, 1297482736, 250, 310], // 134
    ["Бомба-липучка", "weapon_stickybomb", 0, -1110203649, 750, 1200], // 135
    ["Слезоточивый газ", "weapon_bzgas", 0, 1591549914, 690, 485], // 136

    ["Парашют", "gadget_parachute", 0, -1679378668, 3200, 7500], // 137

    ["Купюра 1$", "", 0, 1814532926, 1, 1], // 138
    ["Купюра 100$", "", 0, 1597489407, 1, 1], // 139
    ["Маленькая пачка 100$", "", 0, -1170050911, 100, 100], // 110
    ["Большая пачка 100$", "", 0, -1448063107, 300, 300], // 141

    ["Упаковка кокаина 1кг", "", 0, 525896218, 1000, 1000], // 142
    ["Упаковка марихуаны 200г", "", 0, -395076527, 200, 1000], // 143
    ["Упаковка кокаина 5кг", "", 0, -1688127, 5000, 5000], // 144
    ["Упаковка марихуаны 800г", "", 0, -680115871, 800, 4000], // 145

    ["Коробка патронов 12.7mm", "", 0, 1843823183, 8900, 1568], //146 / 60
    ["Коробка патронов сингального пистолета", "", 0, 1843823183, 1600, 1568], //147 / 10
    ["Коробка патронов феерверка", "", 0, 1843823183, 1600, 1568], //148 / 1
    ["Коробка патронов RPG", "", 0, 1843823183, 2200, 1568], //149 / 120
    ["Коробка патронов", "", 0, 1843823183, 3800, 1568], //150 / 10
    ["Коробка подствольных гранат", "", 0, 1843823183, 3800, 1568], //151 / 10
    ["Коробка патронов Stinger", "", 0, 1843823183, 1500, 1568], //152 / 1
    ["Коробка патронов 9mm (SMG)", "", 0, 190687980, 1140, 432], //153 / 140

    ["Кокаин (10гр)", "", 0, 1808635348, 10, 10], //154
    ["Лечебная марихуана (10гр)", "", 0, 671777952, 10, 50], //155

    ["Кокаин (50гр)", "", 0, 1808635348, 50, 50], //156
    ["Лечебная марихуана (50гр)", "", 0, 671777952, 50, 250], //157

    ["Амфетамин", "", 0, 1808635348, 1, 1], //158
    ["DMT", "", 0, 1808635348, 1, 1], //159
    ["Мефедрон", "", 0, 1808635348, 1, 1], //160
    ["Кетамин", "", 0, 671777952, 1, 5], //161
    ["LSD", "", 0, 671777952, 1, 5], //162

    ["Упаковка амфетамина 1кг", "", 0, 525896218, 1000, 1000], // 163
    ["Упаковка амфетамина 5кг", "", 0, -1688127, 5000, 5000], // 164

    ["Упаковка DMT 1кг", "", 0, 525896218, 1000, 1000], // 165
    ["Упаковка DMT 5кг", "", 0, -1688127, 5000, 5000], // 166

    ["Упаковка мефедрона 1кг", "", 0, 525896218, 1000, 1000], // 167
    ["Упаковка мефедрона 5кг", "", 0, -1688127, 5000, 5000], // 168

    ["Упаковка кетамина 1кг", "", 0, 1430410579, 1000, 3000], // 169
    ["Упаковка LSD 1кг", "", 0, 1430410579, 1000, 3000], // 170

    ["Амфетамин (10гр)", "", 0, 1808635348, 10, 10], //171
    ["DMT (10гр)", "", 0, 1808635348, 10, 10], //172
    ["Мефедрон (10гр)", "", 0, 1808635348, 10, 10], //173
    ["Кетамин (10гр)", "", 0, 671777952, 10, 50], //174
    ["LSD (10гр)", "", 0, 671777952, 10, 50], //175

    ["Амфетамин (50гр)", "", 0, 1808635348, 50, 50], //176
    ["DMT (50гр)", "", 0, 1808635348, 50, 50], //177
    ["Мефедрон (50гр)", "", 0, 1808635348, 50, 50], //178
    ["Кетамин (50гр)", "", 0, 671777952, 50, 250], //179
    ["LSD (50гр)", "", 0, 671777952, 50, 250], //180

    ["Деревянный ящик Gray Tea", "", 0, -1147461795, 15000, 500000], //181
    ["Коробка Листов A4", "", 0, 1465830963, 2500, 40000], //182
    ["Коробка Redwood", "", 0, 1465830963, 2500, 35000], //183
    ["Коробка Clucking Bell", "", 0, 250374685, 15000, 70000], //184
    ["Коробка Jo Jo diet Cola", "", 0, -1244905398, 8000, 25000], //185
    ["Коробка Craft", "", 0, -517243780, 40000, 70000], //186
    ["Коробка Fish and Roll", "", 0, -1563678327, 60000, 450000], //187
    ["Деревянный ящик GoPostal", "", 0, -1649986476, 19000, 300000], //188
    ["Огромная деревянный ящик", "", 0, 1955876122, 420000, 5000000], //189
    ["Важная деревянный ящик", "", 0, 307713837, 120000, 1250000], //190
    ["Коробка из китая", "", 0, -1513883840, 35000, 450000], //191
    ["Важная коробка", "", 0, -1438964996, 12000, 250000], //192
    ["Маленькая коробка", "", 0, -721895765, 4000, 55000], //193

    ["Полосатая бочка", "", 0, 546252211, 30000, 5000], //194
    ["Ограждение со стрелкой", "", 0, 1867879106, 8000, 5000], //195
    ["Длинное ограждение", "", 0, -205311355, 10000, 5000], //196
    ["Деревянное ограждение", "", 0, 1072616162, 5000, 5000], //197
    ["Деревянное ограждение с огнём", "", 0, 1329951119, 5000, 5000], //198
    ["Полицейское огорождение", "", 0, -143315610, 9000, 5000], //199
    ["Длинный полосатый конус", "", 0, 939377219, 1000, 3000], //200
    ["Полосатый конус", "", 0, 1245865676, 1000, 3000], //201
    ["Красный конус", "", 0, 862664990, 1000, 3000], //202
    ["Длинный конус с огнями", "", 0, -1587301201, 1000, 3000], //203

    ["Капсула с таблетками", "", 0, -2127785247, 50, 25], //204
    ["Огромная стекляная бутыль", "", 0, -1382355819, 3000, 6750], //205
    ["Капсула с таблетками", "", 0, -756465278, 50, 30], //206
    ["Бутыль", "", 0, 393961710, 250, 250], //207
    ["Сироп", "", 0, 1648892290, 120, 170], //208
    ["Большая стекляная банка", "", 0, 566302905, 1500, 4200], //209
    ["Стекляная банка", "", 0, -2034834785, 500, 1400], //210
    ["Контейнер с пробирками", "", 0, -330775550, 4500, 6000], //211
    ["Контейнер для пробирок", "", 0, -192665395, 2000, 6000], //212
    ["Пробирка", "", 0, -2022085894, 500, 60], //213
    ["Шприц", "", 0, -61966571, 50, 6], //214
    ["Аптечка", "", 0, 678958360, 500, 880], //215
    ["Бинт", "", 0, 546339338, 70, 280], //216
    ["Большой бинт", "", 0, 580223600, 120, 410], //217
    ["Таблетки", "", 0, -1129328507, 20, 10], //218
    ["Бутыль с перекисью водорода", "", 0, 1254553771, 3000, 8000], //219
    ["Упаковка таблеток", "", 0, 1787587532, 50, 130], //220
    ["Антипохмелин", "", 0, 1547095841, 12, 130], //221
    ["Упаковка таблеток", "", 0, 1174512311, 50, 130], //222

    ["Сырое мясо кабана", "", 0, 936464539, 4000, 10000], //223 a_c_boar
    ["Сырое мясо ястреба", "", 0, 936464539, 300, 2000], //224 a_c_chickenhawk
    ["Сырое мясо коровы", "", 0, 936464539, 4000, 10000], //225 a_c_cow
    ["Сырое мясо баклана", "", 0, 936464539, 290, 1500], //226 a_c_cormorant
    ["Сырое мясо оленя", "", 0, 936464539, 4000, 15000], //227 a_c_deer
    ["Сырое мясо курицы", "", 0, 936464539, 290, 1500], //228 a_c_hen
    ["Сырое мясо свиньи", "", 0, 936464539, 4000, 10000], //229 a_c_pig
    ["Сырое мясо кролика", "", 0, 936464539, 500, 3000], //230 a_c_rabbit_01
    ["Сырое мясо крысы", "", 0, 936464539, 50, 500], //231 a_c_rat

    ["Мясо кабана", "", 0, 936464539, 4000, 10000], //232
    ["Мясо ястреба", "", 0, 936464539, 300, 2000], //233
    ["Мясо коровы", "", 0, 936464539, 4000, 10000], //234
    ["Мясо баклана", "", 0, 936464539, 290, 1500], //235
    ["Мясо оленя", "", 0, 936464539, 4000, 12000], //236
    ["Мясо курицы", "", 0, 936464539, 290, 1500], //237
    ["Мясо свиньи", "", 0, 936464539, 4000, 10000], //238
    ["Мясо кролика", "", 0, 936464539, 500, 3000], //239
    ["Мясо крысы", "", 0, 936464539, 100, 1000], //240

    ["Сырое мясо тунца", "", 0, 936464539, 1000, 3000], //241
    ["Сырое мясо окуня", "", 0, 936464539, 300, 800], //242
    ["Сырое мясо краба", "", 0, 936464539, 600, 4000], //243
    ["Сырое мясо лосося", "", 0, 936464539, 290, 1000], //244
    ["Сырое мясо креветок", "", 0, 936464539, 290, 600], //245

    ["Мясо тунца", "", 0, 936464539, 1000, 3000], //246
    ["Мясо окуня", "", 0, 936464539, 300, 800], //247
    ["Мясо краба", "", 0, 936464539, 600, 4000], //248
    ["Мясо лосося", "", 0, 936464539, 290, 1000], //249
    ["Мясо креветок", "", 0, 936464539, 290, 600], //250

    ["Удочка", "", 0, 1338703913, 3560, 14900], //251
    ["Бронежилет", "", 0, 701173564, 3560, 14900], //252
    ["Игральные кости", "", 0, -1803909274, 50, 6], //253

    ["Маленький розовый член", "", 0, -422877666, 250, 195], //254
    ["Красный вибратор ", "", 0, -463441113, 450, 440], //255
    ["Фиолетовый член", "", 0, -731262150, 330, 290], //256
    ["Кожаный член", "", 0, -1980613044, 320, 285], //257
    ["Позолоченный член", "", 0, 2009373169, 390, 180], //258
    ["Металлический член", "", 0, -1921596075, 390, 180], //259
    ["Большой резиновый член", "", 0, 1333481871, 950, 2100], //260
    ["Анальная смазка", "", 0, 1553232197, 250, 540], //261

    ["C4 (Мощная)", "StickyBomb", 0, -1110203649, 750, 1200], //262
    ["Рюкзак", "", 0, -1158162337, 2000, 20000], //263
    ["Сумка", "", 0, -1158162337, 2000, 50000], //264
    ["Одежда", "", 0, -1158162337, 2000, 4500], //265
    ["Штаны", "", 0, -1158162337, 2000, 4500], //266
    ["Обувь", "", 0, 101151147, 1500, 3000], //267
    ["Аксессуар", "", 0, 1267833770, 400, 1200], //268

    ["Головной убор", "", 0, 1267833770, 500, 1500], //269
    ["Очки", "", 0, 1298569174, 200, 350], //270
    ["Серьги", "", true,1267833770, 150, 90], //271
    ["Часы", "", 0, 1267833770, 250, 300], //272
    ["Браслет", "", 0, 1267833770, 250, 300], //273
    ["Маска", "", 0, 1267833770, 400, 1200], //274

    ["Коробка отмычек", "", 0, 1267833770, 500, 60], //275
    ["Коробка спец. отмычек", "", 0, 1267833770, 1500, 180], //276

    ["Лотерейный билет", "", 0, 406712611, 80, 410], //277
    ["Спец. Аптечка", "", 0, 678958360, 500, 880], //278

    ["Коробка патронов", "", 0, 1843823183, 3800, 1568], //279 / 10
    ["Коробка патронов 9mm", "", 0, 190687980, 1140, 432], //280 / 140
    ["Коробка патронов 12 калибра", "", 0, 1560006187, 2420, 1024], //281 / 120
    ["Коробка патронов 7.62mm", "", 0, 669213687, 2580, 686], //282 / 130
    ["Коробка патронов 5.45mm", "", 0, 1843823183, 3620, 1568], //283 / 260
    ["Коробка патронов 5.56mm", "", 0, 1843823183, 3620, 1568], //284 / 260
    ["Коробка патронов 12.7mm", "", 0, 1843823183, 8900, 1568], //285 / 60
    ["Коробка патронов .45 ACP", "", 0, 1843823183, 8900, 1568], //286 / 60
    ["Коробка патронов .44 Magnum", "", 0, 1843823183, 8900, 1568], //287 / 60

    ["Коробка патронов сингального пистолета", "", 0, 1843823183, 1600, 1568], //288 / 10
    ["Коробка патронов феерверка", "", 0, 1843823183, 1600, 1568], //289 / 1
    ["Коробка подствольных гранат", "", 0, 1843823183, 3800, 1568], //290 / 10
    ["Коробка патронов RPG", "", 0, 1843823183, 2200, 1568], //291 / 1
    ["Коробка патронов Stinger", "", 0, 1843823183, 1500, 1568], //292 / 1

    ["Фонарик", "weapon_pistol", 899381934, 999, 999, 999], //293
    ["Глушитель", "weapon_pistol", 1709866683, 999, 999, 999], //294

    ["Фонарик", "weapon_combatpistol", 899381934, 999, 999, 999], //295
    ["Глушитель", "weapon_combatpistol", -1023114086, 999, 999, 999], //296

    ["Фонарик", "weapon_appistol", 899381934, 999, 999, 999], //297
    ["Глушитель", "weapon_appistol", -1023114086, 999, 999, 999], //298

    ["Фонарик", "weapon_pistol50", 899381934, 999, 999, 999], //299
    ["Глушитель", "weapon_pistol50", -1489156508, 999, 999, 999], //300

    ["Фонарик", "weapon_heavypistol", 899381934, 999, 999, 999], //301
    ["Глушитель", "weapon_heavypistol", -1023114086, 999, 999, 999], //302

    ["Голографический прицел", "weapon_revolver_mk2", 1108334355, 999, 999, 999], //303
    ["Прицел малой кратности", "weapon_revolver_mk2", 77277509, 999, 999, 999], //304
    ["Фонарик", "weapon_revolver_mk2", 899381934, 999, 999, 999], //305
    ["Компенсатор", "weapon_revolver_mk2", 654802123, 999, 999, 999], //306

    ["Фонарик", "weapon_snspistol_mk2", 1246324211, 999, 999, 999], //307
    ["Оптический прицел", "weapon_snspistol_mk2", 2112431491, 999, 999, 999], //308
    ["Компенсатор", "weapon_snspistol_mk2", -1434287169, 999, 999, 999], //309
    ["Глушитель", "weapon_snspistol_mk2", 1709866683, 999, 999, 999], //310

    ["Фонарик", "weapon_pistol_mk2", 1140676955, 999, 999, 999], //311
    ["Оптический прицел", "weapon_pistol_mk2", -1898661008, 999, 999, 999], //312
    ["Глушитель", "weapon_pistol_mk2", 1709866683, 999, 999, 999], //313
    ["Компенсатор", "weapon_pistol_mk2", 568543123, 999, 999, 999], //314

    ["Глушитель", "weapon_vintagepistol", -1023114086, 999, 999, 999], //315

    ["Глушитель", "weapon_ceramicpistol", -1828202758, 999, 999, 999], //316

    ["Фонарик", "weapon_microsmg", 899381934, 999, 999, 999], //317
    ["Прицел", "weapon_microsmg", -1657815255, 999, 999, 999], //318
    ["Глушитель", "weapon_microsmg", -1489156508, 999, 999, 999], //319

    ["Прицел", "weapon_smg", 1019656791, 999, 999, 999], //320
    ["Глушитель", "weapon_smg", -1023114086, 999, 999, 999], //321

    ["Фонарик", "weapon_assaultsmg", 2076495324, 999, 999, 999], //322
    ["Прицел", "weapon_assaultsmg", -1657815255, 999, 999, 999], //323
    ["Глушитель", "weapon_assaultsmg", -1489156508, 999, 999, 999], //324

    ["Фонарик", "weapon_smg_mk2", 2076495324, 999, 999, 999], //325
    ["Голографический прицел", "weapon_smg_mk2", -1613015470, 999, 999, 999], //326
    ["Прицел малой кратности", "weapon_smg_mk2", -452809877, 999, 999, 999], //327
    ["Прицел средней кратности", "weapon_smg_mk2", 1038927834, 999, 999, 999], //328
    ["Глушитель", "weapon_smg_mk2", -1023114086, 999, 999, 999], //329
    ["Плоский дульный тормоз", "weapon_smg_mk2", -1181482284, 999, 999, 999], //330
    ["Тактический дульный тормоз", "weapon_smg_mk2", -932732805, 999, 999, 999], //331
    ["Дульный тормоз с толстым наконечником", "weapon_smg_mk2", -569259057, 999, 999, 999], //332
    ["Дульный тормоз повышенной точности", "weapon_smg_mk2", -326080308, 999, 999, 999], //333
    ["Сверхпрочный дульный тормоз", "weapon_smg_mk2", 48731514, 999, 999, 999], //334
    ["Наклонный дульный тормоз", "weapon_smg_mk2", 880736428, 999, 999, 999], //335
    ["Разъемный дульный тормоз", "weapon_smg_mk2", 1303784126, 999, 999, 999], //336

    ["Глушитель", "weapon_machinepistol", -1023114086, 999, 999, 999], //337

    ["Фонарик", "weapon_combatpdw", 2076495324, 999, 999, 999], //338
    ["Рукоятка", "weapon_combatpdw", 202788691, 999, 999, 999], //339
    ["Прицел", "weapon_combatpdw", -1439939148, 999, 999, 999], //340

    ["Фонарик", "weapon_pumpshotgun", 2076495324, 999, 999, 999], //341
    ["Глушитель", "weapon_pumpshotgun", -435637410, 999, 999, 999], //342

    ["Фонарик", "weapon_assaultshotgun", 2076495324, 999, 999, 999], //343
    ["Рукоятка", "weapon_assaultshotgun", 202788691, 999, 999, 999], //344
    ["Глушитель", "weapon_assaultshotgun", -2089531990, 999, 999, 999], //345

    ["Фонарик", "weapon_bullpupshotgun", 2076495324, 999, 999, 999], //346
    ["Рукоятка", "weapon_bullpupshotgun", 202788691, 999, 999, 999], //347
    ["Глушитель", "weapon_bullpupshotgun", -1489156508, 999, 999, 999], //348

    ["Голографический прицел", "weapon_pumpshotgun_mk2", 1108334355, 999, 999, 999], //349
    ["Прицел малой кратности", "weapon_pumpshotgun_mk2", 77277509, 999, 999, 999], //350
    ["Прицел средней кратности", "weapon_pumpshotgun_mk2", 1060929921, 999, 999, 999], //351
    ["Фонарик", "weapon_pumpshotgun_mk2", 2076495324, 999, 999, 999], //352
    ["Глушитель", "weapon_pumpshotgun_mk2", -1404903567, 999, 999, 999], //353
    ["Дульный тормоз", "weapon_pumpshotgun_mk2", 1602080333, 999, 999, 999], //354

    ["Фонарик", "weapon_heavyshotgun", 2076495324, 999, 999, 999], //355
    ["Рукоятка", "weapon_heavyshotgun", 202788691, 999, 999, 999], //356
    ["Глушитель", "weapon_heavyshotgun", -1489156508, 999, 999, 999], //357

    ["Фонарик", "weapon_assaultrifle", 2076495324, 999, 999, 999], //358
    ["Рукоятка", "weapon_assaultrifle", 202788691, 999, 999, 999], //359
    ["Глушитель", "weapon_assaultrifle", -1489156508, 999, 999, 999], //360
    ["Прицел", "weapon_assaultrifle", -1657815255, 999, 999, 999], //361

    ["Фонарик", "weapon_carbinerifle", 2076495324, 999, 999, 999], //362
    ["Рукоятка", "weapon_carbinerifle", 202788691, 999, 999, 999], //363
    ["Глушитель", "weapon_carbinerifle", -2089531990, 999, 999, 999], //364
    ["Прицел", "weapon_carbinerifle", -1596416958, 999, 999, 999], //365


    ["Фонарик", "weapon_advancedrifle", 2076495324, 999, 999, 999], //366
    ["Глушитель", "weapon_advancedrifle", -2089531990, 999, 999, 999], //367
    ["Прицел", "weapon_advancedrifle", -1439939148, 999, 999, 999], //368

    ["Фонарик", "weapon_specialcarbine", 2076495324, 999, 999, 999], //369
    ["Рукоятка", "weapon_specialcarbine", 202788691, 999, 999, 999], //370
    ["Глушитель", "weapon_specialcarbine", -1489156508, 999, 999, 999], //371
    ["Прицел", "weapon_specialcarbine", -1596416958, 999, 999, 999], //372

    ["Фонарик", "weapon_bullpuprifle", 2076495324, 999, 999, 999], //373
    ["Рукоятка", "weapon_bullpuprifle", 202788691, 999, 999, 999], //374
    ["Глушитель", "weapon_bullpuprifle", -2089531990, 999, 999, 999], //375
    ["Прицел", "weapon_bullpuprifle", -1439939148, 999, 999, 999], //376


    ["Фонарик", "weapon_bullpuprifle_mk2", 2076495324, 999, 999, 999], //377
    ["Голографический прицел", "weapon_bullpuprifle_mk2", 1108334355, 999, 999, 999], //378
    ["Прицел малой кратности", "weapon_bullpuprifle_mk2", -944910075, 999, 999, 999], //379
    ["Прицел средней кратности", "weapon_bullpuprifle_mk2", 1060929921, 999, 999, 999], //380
    ["Глушитель", "weapon_bullpuprifle_mk2", -2089531990, 999, 999, 999], //381
    ["Плоский дульный тормоз", "weapon_bullpuprifle_mk2", -1181482284, 999, 999, 999], //382
    ["Тактический дульный тормоз", "weapon_bullpuprifle_mk2", -932732805, 999, 999, 999], //383
    ["Дульный тормоз с толстым наконечником", "weapon_bullpuprifle_mk2", -569259057, 999, 999, 999], //384
    ["Дульный тормоз повышенной точности", "weapon_bullpuprifle_mk2", -326080308, 999, 999, 999], //385
    ["Сверхпрочный дульный тормоз", "weapon_bullpuprifle_mk2", 48731514, 999, 999, 999], //386
    ["Наклонный дульный тормоз", "weapon_bullpuprifle_mk2", 880736428, 999, 999, 999], //387
    ["Разъемный дульный тормоз", "weapon_bullpuprifle_mk2", 1303784126, 999, 999, 999], //388
    ["Рукоятка", "weapon_bullpuprifle_mk2", -1654288262, 999, 999, 999], //389


    ["Фонарик", "weapon_specialcarbine_mk2", 2076495324, 999, 999, 999], //390
    ["Голографический прицел", "weapon_specialcarbine_mk2", 1108334355, 999, 999, 999], //391
    ["Прицел малой кратности", "weapon_specialcarbine_mk2", 77277509, 999, 999, 999], //392
    ["Прицел большой кратности", "weapon_specialcarbine_mk2", -966040254, 999, 999, 999], //393
    ["Глушитель", "weapon_specialcarbine_mk2", -1489156508, 999, 999, 999], //394
    ["Плоский дульный тормоз", "weapon_specialcarbine_mk2", -1181482284, 999, 999, 999], //395
    ["Тактический дульный тормоз", "weapon_specialcarbine_mk2", -932732805, 999, 999, 999], //396
    ["Дульный тормоз с толстым наконечником", "weapon_specialcarbine_mk2", -569259057, 999, 999, 999], //397
    ["Дульный тормоз повышенной точности", "weapon_specialcarbine_mk2", -326080308, 999, 999, 999], //398
    ["Сверхпрочный дульный тормоз", "weapon_specialcarbine_mk2", 48731514, 999, 999, 999], //399
    ["Наклонный дульный тормоз", "weapon_specialcarbine_mk2", 880736428, 999, 999, 999], //400
    ["Разъемный дульный тормоз", "weapon_specialcarbine_mk2", 1303784126, 999, 999, 999], //401
    ["Рукоятка", "weapon_specialcarbine_mk2", -1654288262, 999, 999, 999], //402


    ["Фонарик", "weapon_assaultrifle_mk2", 2076495324, 999, 999, 999], //403
    ["Голографический прицел", "weapon_assaultrifle_mk2", 1108334355, 999, 999, 999], //404
    ["Прицел малой кратности", "weapon_assaultrifle_mk2", 77277509, 999, 999, 999], //405
    ["Прицел большой кратности", "weapon_assaultrifle_mk2", -966040254, 999, 999, 999], //406
    ["Глушитель", "weapon_assaultrifle_mk2", -1489156508, 999, 999, 999], //407
    ["Плоский дульный тормоз", "weapon_assaultrifle_mk2", -1181482284, 999, 999, 999], //408
    ["Тактический дульный тормоз", "weapon_assaultrifle_mk2", -932732805, 999, 999, 999], //409
    ["Дульный тормоз с толстым наконечником", "weapon_assaultrifle_mk2", -569259057, 999, 999, 999], //410
    ["Дульный тормоз повышенной точности", "weapon_assaultrifle_mk2", -326080308, 999, 999, 999], //411
    ["Сверхпрочный дульный тормоз", "weapon_assaultrifle_mk2", 48731514, 999, 999, 999], //412
    ["Наклонный дульный тормоз", "weapon_assaultrifle_mk2", 880736428, 999, 999, 999], //413
    ["Разъемный дульный тормоз", "weapon_assaultrifle_mk2", 1303784126, 999, 999, 999], //414
    ["Рукоятка", "weapon_assaultrifle_mk2", -1654288262, 999, 999, 999], //415

    ["Фонарик", "weapon_carbinerifle_mk2", 2076495324, 999, 999, 999], //416
    ["Голографический прицел", "weapon_carbinerifle_mk2", 1108334355, 999, 999, 999], //417
    ["Прицел малой кратности", "weapon_carbinerifle_mk2", 77277509, 999, 999, 999], //418
    ["Прицел большой кратности", "weapon_carbinerifle_mk2", -966040254, 999, 999, 999], //419
    ["Глушитель", "weapon_carbinerifle_mk2", -2089531990, 999, 999, 999], //420
    ["Плоский дульный тормоз", "weapon_carbinerifle_mk2", -1181482284, 999, 999, 999], //421
    ["Тактический дульный тормоз", "weapon_carbinerifle_mk2", -932732805, 999, 999, 999], //422
    ["Дульный тормоз с толстым наконечником", "weapon_carbinerifle_mk2", -569259057, 999, 999, 999], //423
    ["Дульный тормоз повышенной точности", "weapon_carbinerifle_mk2", -326080308, 999, 999, 999], //424
    ["Сверхпрочный дульный тормоз", "weapon_carbinerifle_mk2", 48731514, 999, 999, 999], //425
    ["Наклонный дульный тормоз", "weapon_carbinerifle_mk2", 880736428, 999, 999, 999], //426
    ["Разъемный дульный тормоз", "weapon_carbinerifle_mk2", 1303784126, 999, 999, 999], //427
    ["Рукоятка", "weapon_carbinerifle_mk2", -1654288262, 999, 999, 999], //428

    ["Прицел", "weapon_mg", 1006677997, 999, 999, 999], //429

    ["Прицел", "weapon_combatmg", -1596416958, 999, 999, 999], //430
    ["Рукоятка", "weapon_combatmg", 202788691, 999, 999, 999], //431

    ["Голографический прицел", "weapon_combatmg_mk2", 1108334355, 999, 999, 999], //432
    ["Прицел средней кратности", "weapon_combatmg_mk2", 1060929921, 999, 999, 999], //433
    ["Прицел большой кратности", "weapon_combatmg_mk2", -966040254, 999, 999, 999], //434
    ["Плоский дульный тормоз", "weapon_combatmg_mk2", -1181482284, 999, 999, 999], //435
    ["Тактический дульный тормоз", "weapon_combatmg_mk2", -932732805, 999, 999, 999], //436
    ["Дульный тормоз с толстым наконечником", "weapon_combatmg_mk2", -569259057, 999, 999, 999], //437
    ["Дульный тормоз повышенной точности", "weapon_combatmg_mk2", -326080308, 999, 999, 999], //438
    ["Сверхпрочный дульный тормоз", "weapon_combatmg_mk2", 48731514, 999, 999, 999], //439
    ["Наклонный дульный тормоз", "weapon_combatmg_mk2", 880736428, 999, 999, 999], //440
    ["Разъемный дульный тормоз", "weapon_combatmg_mk2", 1303784126, 999, 999, 999], //441
    ["Рукоятка", "weapon_combatmg_mk2", -1654288262, 999, 999, 999], //442

    ["Прицел", "weapon_sniperrifle", -767279652, 999, 999, 999], //443
    ["Модернизированный прицел", "weapon_sniperrifle", -1135289737, 999, 999, 999], //444

    ["Прицел", "weapon_heavysniper", -767279652, 999, 999, 999], //445
    ["Модернизированный прицел", "weapon_heavysniper", -1135289737, 999, 999, 999], //446

    ["Фонарик", "weapon_marksmanrifle_mk2", 2076495324, 999, 999, 999], //447
    ["Голографический прицел", "weapon_marksmanrifle_mk2", 1108334355, 999, 999, 999], //448
    ["Кратный прицел", "weapon_marksmanrifle_mk2", 1528590652, 999, 999, 999], //449
    ["Прицел большой кратности", "weapon_marksmanrifle_mk2", -966040254, 999, 999, 999], //450
    ["Глушитель", "weapon_marksmanrifle_mk2", -2089531990, 999, 999, 999], //451
    ["Плоский дульный тормоз", "weapon_marksmanrifle_mk2", -1181482284, 999, 999, 999], //452
    ["Тактический дульный тормоз", "weapon_marksmanrifle_mk2", -932732805, 999, 999, 999], //453
    ["Дульный тормоз с толстым наконечником", "weapon_marksmanrifle_mk2", -569259057, 999, 999, 999], //454
    ["Дульный тормоз повышенной точности", "weapon_marksmanrifle_mk2", -326080308, 999, 999, 999], //455
    ["Сверхпрочный дульный тормоз", "weapon_marksmanrifle_mk2", 48731514, 999, 999, 999], //456
    ["Наклонный дульный тормоз", "weapon_marksmanrifle_mk2", 880736428, 999, 999, 999], //457
    ["Разъемный дульный тормоз", "weapon_marksmanrifle_mk2", 1303784126, 999, 999, 999], //458
    ["Рукоятка", "weapon_marksmanrifle_mk2", -1654288262, 999, 999, 999], //459

    ["Тепловизионный прицел", "weapon_heavysniper_mk2", 776198721, 999, 999, 999], //460
    ["Прицел ночного видения", "weapon_heavysniper_mk2", -1233121104, 999, 999, 999], //461
    ["Кратный прицел", "weapon_heavysniper_mk2", -2101279869, 999, 999, 999], //462
    ["Модернизированный прицел", "weapon_heavysniper_mk2", -1135289737, 999, 999, 999], //463
    ["Глушитель", "weapon_heavysniper_mk2", -1404903567, 999, 999, 999], //464
    ["Дульный тормоз", "weapon_heavysniper_mk2", 1602080333, 999, 999, 999], //465
    ["Дульный тормоз с тупым наконечником", "weapon_heavysniper_mk2", 1764221345, 999, 999, 999], //466

    ["Фонарик", "weapon_marksmanrifle", 2076495324, 999, 999, 999], //467
    ["Рукоятка", "weapon_marksmanrifle", 202788691, 999, 999, 999], //468
    ["Глушитель", "weapon_marksmanrifle", -2089531990, 999, 999, 999], //469
    ["Прицел", "weapon_marksmanrifle", 471997210, 999, 999, 999], //470

    ["Фонарик", "weapon_grenadelauncher", 2076495324, 999, 999, 999], //471
    ["Рукоятка", "weapon_grenadelauncher", 202788691, 999, 999, 999], //472
    ["Прицел", "weapon_grenadelauncher", -1439939148, 999, 999, 999], //473
];

items.isWeapon = function(itemId) {
    return itemId >= 54 && itemId <= 138;
};

items.isAmmo = function(itemId) {
    return itemId >= 279 && itemId <= 292;
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

items.canEquipById = function(id)
{
    try
    {
        return items.itemList[id][2];
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
        return items.itemList[id][0];
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
        return items.itemList[id][1];
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
        return items.itemList[id][3];
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
        return items.itemList[id][4];
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
        return Math.Round(items.itemList[id][4] / 1000.0);
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
        return items.itemList[id][5];
    }
    catch
    {
        return -1;
    }
};
