import { computed, makeObservable, observable } from 'mobx';

import Camera from '../Camera.js';
import {
  PLAYER_COLORS, TEAM_DIRE, TEAM_RADIANT, TEAM_SPECTATORS,
} from '../../constants.js';

import Entity from './Entity.js';
import Cooldown from '../Cooldown.js';

class Player extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.id = null;
    this.name = null;
    this.heroID = null;
    this.teamID = null;
    this.steamID = null;
    this.kills = 0;
    this.assists = 0;
    this.deaths = 0;
    this.isBot = false;
    this.isBroadcaster = false;

    this.camera = new Camera();
    this.respawnCooldown = new Cooldown(replay);

    makeObservable(this, {
      id: observable,
      name: observable,
      heroID: observable,
      teamID: observable,
      steamID: observable,
      kills: observable,
      assists: observable,
      deaths: observable,
      isBot: observable,
      isBroadcaster: observable,

      camera: observable,
      respawnCooldown: observable,

      color: computed,
      hero: computed,
      index: computed,
      team: computed,
    });
  }

  get color() {
    return PLAYER_COLORS[this.id];
  }

  get hero() {
    return this.replay.units.get(this.heroID);
  }

  get index() {
    return String(this.id).padStart(4, '0');
  }

  get isPlayer() {
    return this.teamID === TEAM_RADIANT || this.teamID === TEAM_DIRE;
  }

  get isSpectator() {
    return this.teamID === TEAM_SPECTATORS;
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Player;
