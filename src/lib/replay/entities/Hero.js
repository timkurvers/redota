import { computed, makeObservable, observable } from 'mobx';

import { heroesByName } from '../../constants.js';

import Unit from './Unit.js';

class Hero extends Unit {
  constructor(replay, eid) {
    super(replay, eid);

    this.refname = null;
    this.playerID = -1;
    this.level = 1;
    this.xp = 0;
    this.inventoryHandles = [
      null, null, null,
      null, null, null,
    ];

    makeObservable(this, {
      refname: observable,
      playerID: observable,
      level: observable,
      xp: observable,
      inventoryHandles: observable,

      inventory: computed,
      player: computed,
    });
  }

  get color() {
    return this.player.color;
  }

  get inventory() {
    return this.inventoryHandles.map((handle) => (
      this.replay.items.byHandle.get(handle)
    ));
  }

  get name() {
    const key = `npc_dota_hero_${this.refname}`;
    return heroesByName[key].localized_name;
  }

  get player() {
    return this.replay.players.byID.get(this.playerID);
  }
}

export default Hero;
