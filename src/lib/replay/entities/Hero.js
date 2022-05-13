import { computed, makeObservable, observable } from 'mobx';

import { heroesByName } from '../../definitions/index.js';

import UnitWithInventory from './UnitWithInventory.js';

class Hero extends UnitWithInventory {
  constructor(...args) {
    super(...args);
    this.type = 'hero';

    this.playerID = -1;
    this.xp = 0;
    this.isIllusion = false;

    this.backpackHandles = [null, null, null];
    this.neutralItemHandle = null;
    this.stashHandles = [null, null, null, null, null, null];
    this.teleportScrollHandle = null;

    makeObservable(this, {
      playerID: observable,
      xp: observable,
      isIllusion: observable,

      backpackHandles: observable,
      neutralItemHandle: observable,
      stashHandles: observable,
      teleportScrollHandle: observable,

      backpack: computed,
      neutralItem: computed,
      player: computed,
      respawnCooldown: computed,
      stash: computed,
      teleportScroll: computed,
      ultimateAbility: computed,
    });
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
    return heroesByName[this.refname].localized_name;
  }

  get neutralItem() {
    return this.replay.items.get(this.neutralItemHandle);
  }

  get player() {
    return this.replay.players.get(this.playerID);
  }

  get refname() {
    return this.internalName;
  }

  get respawnCooldown() {
    return this.player?.respawnCooldown;
  }

  get stash() {
    return this.stashHandles.map((handle) => (
      this.replay.items.get(handle)
    ));
  }

  get teleportScroll() {
    return this.replay.items.get(this.teleportScrollHandle);
  }

  get ultimateAbility() {
    // Note: This may not be entirely accurate for old replays
    return this.abilities[5];
  }
}

export default Hero;
