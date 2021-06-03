import { computed, makeObservable, observable } from 'mobx';

import Position from '../Position.js';
import { TEAM_COLORS } from '../../constants.js';
import { unitsByName } from '../../definitions/index.js';

import Entity from './Entity.js';

class Unit extends Entity {
  constructor(...args) {
    super(...args);
    this.type = 'unit';

    this.modelID = null;
    this.teamID = null;
    this.position = new Position();
    this.rotation = null;
    this.level = 1;
    this.hp = 0;
    this.hpMax = 0;
    this.mana = 0;
    this.manaMax = 0;
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
      mana: observable,
      manaMax: observable,
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
    return this.owner?.color || TEAM_COLORS[this.teamID];
  }

  get isDead() {
    return this.hp <= 0;
  }

  get name() {
    return unitsByName[this.refname]?.name || this.refname;
  }

  get owner() {
    const { ownerHandle, replay } = this;
    return replay.units.get(ownerHandle) || replay.players.get(ownerHandle);
  }

  get refname() {
    const { internalName } = this;
    const definition = unitsByName[internalName];
    if (definition && !definition.match) {
      return internalName;
    }

    // TODO: Investigate caching refname to avoid looping over unit definitions
    for (const [key, entry] of Object.entries(unitsByName)) {
      if (entry.match && entry.match(this)) {
        return key;
      }
    }
    return internalName;
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Unit;
