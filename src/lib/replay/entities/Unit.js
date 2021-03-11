import { computed, makeObservable, observable } from 'mobx';

import { TEAM_COLORS, UNIT_NAMES } from '../../constants.js';
import Position from '../Position.js';

import Entity from './Entity.js';

class Unit extends Entity {
  constructor(...args) {
    super(...args);

    this.modelID = null;
    this.teamID = null;
    this.position = new Position();
    this.rotation = null;
    this.level = 1;
    this.hp = 0;
    this.hpMax = 0;
    this.mp = 0;
    this.mpMax = 0;
    this.isWaitingToSpawn = false;

    this.ownerHandle = null;
    this.abilityHandles = [];

    makeObservable(this, {
      modelID: observable,
      teamID: observable,
      position: observable,
      rotation: observable,
      level: observable,
      hp: observable,
      hpMax: observable,
      mp: observable,
      mpMax: observable,
      isWaitingToSpawn: observable,

      ownerHandle: observable,
      abilityHandles: observable,

      abilities: computed,
      color: computed,
      isDead: computed,
      name: computed,
      owner: computed,
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

  get owner() {
    const { ownerHandle, replay } = this;
    return replay.units.get(ownerHandle) || replay.players.get(ownerHandle);
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Unit;
