import './modules/data';
import './modules/events';

import './manager/vSync';
import './manager/pSync';
import './manager/wcSync';
import './manager/shoot';

import './betternotifs';
import './voice';

import business from "./property/business";

import ui from "./modules/ui";
import methods from "./modules/methods";

import checkpoint from "./manager/checkpoint";
import timer from "./manager/timer";
import vBreakLight from "./manager/vBreakLight";
import object from "./manager/object";
import npc from "./manager/npc";

import user from "./user";
import enums from "./enums";

try {

    mp.gui.chat.show(false);
    mp.gui.chat.activate(false);

    /*enums.customIpl.forEach(item => {
        object.createIpl(item[0], new mp.Vector3(item[1], item[2], item[3]), item[4]);
    });*/

    mp.game.ped.setAiMeleeWeaponDamageModifier(1.5);
    mp.game.player.setMeleeWeaponDefenseModifier(1.5);
    mp.game.player.setWeaponDefenseModifier(1.5);

    mp.gui.cursor.show(true, true);

    try {
        user.init();
        methods.requestIpls();
        checkpoint.checkPosition();
        enums.loadCloth();
        business.loadScaleform();

        object.load();
        npc.loadAll();

        timer.loadAll();
        vBreakLight.timer();
    }
    catch (e) {
        methods.debug('ERROR INIT CLIENT', e);
        methods.debug('ERROR INIT CLIENT', e);
        methods.debug(e);
        methods.debug('ERROR INIT CLIENT', e);
        methods.debug('ERROR INIT CLIENT', e);
    }

    mp.events.add('guiReady', () => {
        ui.create();
    });
}
catch (e) {
}

/*mp.events.add('guiReady', () => {
    mp.events.add('browserDomReady', (browser) => {
        //mp.events.callRemote("playerJoined");
    });
});*/