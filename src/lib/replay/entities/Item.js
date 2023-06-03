import { computed, makeObservable, observable } from 'mobx';

import Cooldown from '../Cooldown.js';
import { itemsByName } from '../../definitions/index.js';

import Entity from './Entity.js';

class Item extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.acquireTime = null;
    this.charges = null;
    this.cooldown = new Cooldown(replay);
    this.level = null;
    this.manaCost = null;

    this.ownerHandle = null;

    this.definition = itemsByName[this.refname.replace('item_', '')];

    makeObservable(this, {
      acquireTime: observable,
      charges: observable,
      cooldown: observable,
      level: observable,
      manaCost: observable,

      ownerHandle: observable,

      annotation: computed,
      name: computed,
      owner: computed,
    });
  }

  get annotation() {
    const { refname } = this;
    if (refname === 'item_aegis' && this.owner && this.owner.refname !== 'npc_dota_roshan') {
      // TODO: Verify this calculation with an expiring aegis in-game
      const duration = 300;
      const remaining = duration - (this.replay.game.time - this.acquireTime);
      return `${remaining | 0}s`;
    }
    if (refname === 'item_black_king_bar') {
      return `${11 - this.level}s`;
    }
    return null;
  }

  get name() {
    return this.definition?.dname || this.refname;
  }

  get owner() {
    const { ownerHandle, replay } = this;
    return replay.units.get(ownerHandle);
  }
}

export default Item;
