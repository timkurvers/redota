import { computed, makeObservable, observable } from 'mobx';

import Cooldown from '../Cooldown.js';
import { abilitiesByName, resolveAttribNumber } from '../../definitions/index.js';

import Entity from './Entity.js';

class Ability extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.cooldown = new Cooldown(replay);
    this.isHidden = false;
    this.level = null;
    this.manaCost = null;

    this.ownerHandle = null;

    this.definition = abilitiesByName[this.refname];

    makeObservable(this, {
      cooldown: observable,
      isHidden: observable,
      level: observable,
      manaCost: observable,

      ownerHandle: observable,

      healthCost: computed,
      owner: computed,
    });
  }

  get healthCost() {
    if (!this.level) {
      return 0;
    }
    let cost = (
      resolveAttribNumber(this.definition, 'hp_cost_perc', this.level)
      || resolveAttribNumber(this.definition, 'hp_cost', this.level)
    );
    if (!cost) {
      return 0;
    }
    if (cost < 1) {
      // Assume percentage-based current health cost
      if (!this.owner) {
        return 0;
      }
      cost = (this.owner.hp * cost) | 0;
    }
    return cost;
  }

  get isDotaPlus() {
    return this.refname.startsWith('plus_');
  }

  get isFluff() {
    return this.isDotaPlus || this.isSeasonal;
  }

  get isPassive() {
    return this.definition?.isPassive;
  }

  get isReady() {
    return this.isTrained && this.cooldown.remaining === 0;
  }

  get isSeasonal() {
    return this.refname.startsWith('seasonal_');
  }

  // TODO: Surely there is a better way to determine this?
  get isTalent() {
    return this.refname.startsWith('special_bonus_')
           || this.refname.startsWith('ad_special_bonus_');
  }

  get isTrained() {
    return this.level > 0;
  }

  get isVisible() {
    return !this.isHidden && this.refname !== 'neutral_upgrade';
  }

  get maxLevel() {
    return this.definition?.maxLevel ?? this.level;
  }

  get name() {
    return this.definition?.dname ?? this.refname;
  }

  get owner() {
    const { ownerHandle, replay } = this;
    return replay.units.get(ownerHandle);
  }
}

export default Ability;
