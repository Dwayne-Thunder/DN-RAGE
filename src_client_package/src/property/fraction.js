import Container from '../modules/data';
import methods from '../modules/methods';
import enums from '../enums';
import vehicles from "./vehicles";
import ui from "../modules/ui";
import fuel from "../business/fuel";
import menuList from "../menuList";

let fraction = {};

fraction.addMoney = function(id, money, itemName = 'Операция со счетом') {
    mp.events.callRemote('server:fraction:addMoney', id, money, itemName);
};

fraction.removeMoney = function(id, money, itemName = 'Операция со счетом') {
    mp.events.callRemote('server:fraction:removeMoney', id, money, itemName);
};

fraction.setMoney = function(id, money) {
    mp.events.callRemote('server:fraction:setMoney', id, money);
};

let isUnload = false;

fraction.unloadCargoVehTimer = async function(id) {
    try {

        if (isUnload)
        {
            mp.game.ui.notifications.show(`~r~Транспорт сейчас разгружается`);
            return;
        }

        isUnload = true;
        await methods.sleep(500);

        let time = 0;
        let allCount = 10;
        let veh = mp.players.local.vehicle;
        if (!veh) {
            mp.game.ui.notifications.show(`~r~Вы должны находиться в транспорте`);
            isUnload = false;
            return;
        }

        if (veh.getIsEngineRunning())
            vehicles.engineVehicle();

        let wait = 1000;

        while (time <= allCount) {

            let veh = mp.players.local.vehicle;
            if (!veh) {
                mp.game.ui.notifications.show(`~r~Вы должны находиться в транспорте`);
                isUnload = false;
                return;
            }

            if (veh.getIsEngineRunning()) {
                mp.game.ui.notifications.show(`~r~Вы завели транспорт, разгрузка была отменена`);
                isUnload = false;
                return;
            }

            ui.showSubtitle(`Осталось ~g~${allCount - time}сек`);
            time++;
            await methods.sleep(wait);
        }
        menuList.hide();
        mp.events.callRemote('server:vehicle:cargoUnload', id);
        //mp.game.ui.notifications.show(`~g~Транспорт был разгружен`);
        isUnload = false;
    }
    catch (e) {
        methods.debug(e);
    }
};

fraction.getMoney = async function(id) {
    try {
        return methods.parseFloat(await Container.Data.Get(enums.offsets.fraction + id, 'money'));
    }
    catch (e) {
        methods.debug(e);
        return 0;
    }
};

fraction.addHistory = function(name, doName, text, fractionId = 0) {
    mp.events.callRemote('server:addFractionLog2', name, doName, text, fractionId);
};

fraction.set = function(id, key, value) {
    Container.Data.Set(enums.offsets.fraction + methods.parseInt(id), key, value);
};

fraction.get = async function(id, key) {
    return await Container.Data.Get(enums.offsets.fraction + methods.parseInt(id), key);
};

fraction.getData = async function(id) {
    return await Container.Data.GetAll(enums.offsets.fraction + methods.parseInt(id));
};

export default fraction;