import { computed, makeObservable, observable } from 'mobx';

import { heroesByName } from '../../constants.js';

import UnitWithInventory from './UnitWithInventory.js';

class Hero extends UnitWithInventory {
  constructor(replay, handle) {
    super(replay, handle);

    this.refname = null;
    this.playerID = -1;
    this.level = 1;
    this.xp = 0;

    this.abilityHandles = [];
    this.backpackHandles = [null, null, null];
    this.neutralItemHandle = null;
    this.stashHandles = [null, null, null, null, null, null];
    this.teleportScrollHandle = null;

    makeObservable(this, {
      refname: observable,
      playerID: observable,
      level: observable,
      xp: observable,

      abilityHandles: observable,
      backpackHandles: observable,
      neutralItemHandle: observable,
      stashHandles: observable,
      teleportScrollHandle: observable,

      backpack: computed,
      neutralItem: computed,
      player: computed,
      teleportScroll: computed,
    });
  }

  get abilities() {
    return this.abilityHandles.reduce((abilities, handle) => {
      const ability = this.replay.abilities.get(handle);
      if (ability && !ability.isSeasonal && !ability.isTalent) {
        abilities.push(ability);
      }
      return abilities;
    }, []);
  }

  get backpack() {
    return this.backpackHandles.map((handle) => (
      this.replay.items.get(handle)
    ));
  }

  get color() {
    return this.player.color;
  }

  get name() {
    const key = `npc_dota_hero_${this.refname}`;
    return heroesByName[key].localized_name;
  }

  get neutralItem() {
    return this.replay.items.get(this.neutralItemHandle);
  }

  get player() {
    return this.replay.players.byID.get(this.playerID);
  }

  get stash() {
    return this.stashHandles.map((handle) => (
      this.replay.items.get(handle)
    ));
  }

  get teleportScroll() {
    return this.replay.items.get(this.teleportScrollHandle);
  }
}

export default Hero;
