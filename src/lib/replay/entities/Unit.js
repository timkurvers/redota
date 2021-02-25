import { computed, makeObservable, observable } from 'mobx';

import { TEAM_COLORS, UNIT_NAMES } from '../../constants.js';
import { scale } from '../../utils/index.js';

import Entity from './Entity.js';

class Unit extends Entity {
  constructor(...args) {
    super(...args);

    this.teamID = null;
    this.x = 0;
    this.y = 0;
    this.rotation = null;
    this.hp = 0;
    this.hpMax = 0;
    this.mp = 0;
    this.mpMax = 0;
    this.isWaitingToSpawn = false;

    this.abilityHandles = [];

    makeObservable(this, {
      teamID: observable,
      x: observable,
      y: observable,
      rotation: observable,
      hp: observable,
      hpMax: observable,
      mp: observable,
      mpMax: observable,
      isWaitingToSpawn: observable,

      abilityHandles: observable,

      abilities: computed,
      color: computed,
      isDead: computed,
      name: computed,
      relX: computed,
      relY: computed,
      team: computed,
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

  get color() {
    return TEAM_COLORS[this.teamID];
  }

  get isDead() {
    return this.hp <= 0;
  }

  get name() {
    return UNIT_NAMES[this.class];
  }

  get relX() {
    return scale(this.x);
  }

  get relY() {
    return scale(this.y);
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Unit;
