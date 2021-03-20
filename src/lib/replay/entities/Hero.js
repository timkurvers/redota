import { computed, makeObservable, observable } from 'mobx';

import { PLAYER_COLORS } from '../../constants.js';
import { heroesByName } from '../../definitions/index.js';

import UnitWithInventory from './UnitWithInventory.js';

class Hero extends UnitWithInventory {
  constructor(...args) {
    super(...args);

    this.playerID = -1;
    this.xp = 0;

    this.backpackHandles = [null, null, null];
    this.neutralItemHandle = null;
    this.stashHandles = [null, null, null, null, null, null];
    this.teleportScrollHandle = null;

    makeObservable(this, {
      playerID: observable,
      xp: observable,

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
    });
  }

  get backpack() {
    return this.backpackHandles.map((handle) => (
      this.replay.items.get(handle)
    ));
  }

  get color() {
    // Note: Cannot rely on player being present in case of disconnects
    return PLAYER_COLORS[this.playerID];
  }

  get name() {
    return heroesByName[this.refname].localized_name;
  }

  get neutralItem() {
    return this.replay.items.get(this.neutralItemHandle);
  }

  get player() {
    return this.replay.players.byID.get(this.playerID);
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
}

export default Hero;
