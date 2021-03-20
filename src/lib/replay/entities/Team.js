import { computed, makeObservable, observable } from 'mobx';

import Entity from './Entity.js';

class Team extends Entity {
  constructor(...args) {
    super(...args);

    this.id = null;
    this.name = null;
    this.kills = 0;
    this.proID = null;

    makeObservable(this, {
      id: observable,
      name: observable,
      kills: observable,
      proID: observable,

      heroes: computed,
      players: computed,
      units: computed,
    });
  }

  get heroes() {
    return this.players.map((p) => p.hero).filter(Boolean);
  }

  get players() {
    const players = this.replay.players.filter((p) => p.teamID === this.id);
    return players.sort((a, b) => a.id - b.id);
  }

  get units() {
    return this.replay.units.filter((u) => u.teamID === this.id);
  }
}

export default Team;
