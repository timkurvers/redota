import { computed, makeObservable, observable } from 'mobx';

import Camera from '../Camera.js';
import {
  CONNECTION_STATE, PLAYER_COLORS, TEAM_DIRE, TEAM_RADIANT, TEAM_SPECTATORS,
} from '../../constants.js';
import { lookupProPlayer } from '../../definitions/proPlayersByHash.js';

import Entity from './Entity.js';
import Cooldown from '../Cooldown.js';

class Player extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.id = null;
    this.nickname = null;
    this.heroID = null;
    this.teamID = null;
    this.steamID = null;
    this.pawnID = null;

    this.kills = 0;
    this.assists = 0;
    this.deaths = 0;
    this.lastHits = 0;
    this.denies = 0;
    this.networth = 0;
    this.reliableGold = 0;
    this.unreliableGold = 0;
    this.totalEarnedGold = 0;
    this.totalEarnedXP = 0;

    this.connectionState = CONNECTION_STATE.UNKNOWN;
    this.isBot = false;
    this.isBroadcaster = false;

    this.camera = new Camera();
    this.respawnCooldown = new Cooldown(replay);

    makeObservable(this, {
      id: observable,
      nickname: observable,
      heroID: observable,
      teamID: observable,
      steamID: observable,
      pawnID: observable,

      kills: observable,
      assists: observable,
      deaths: observable,
      lastHits: observable,
      denies: observable,
      networth: observable,
      reliableGold: observable,
      unreliableGold: observable,
      totalEarnedGold: observable,
      totalEarnedXP: observable,

      connectionState: observable,
      isBot: observable,
      isBroadcaster: observable,

      camera: observable,
      respawnCooldown: observable,

      color: computed,
      gold: computed,
      gpm: computed,
      hero: computed,
      index: computed,
      name: computed,
      slot: computed,
      team: computed,
      xpm: computed,

      isConnected: computed,
      isPlayer: computed,
      isProPlayer: computed,
      isSpectator: computed,
    });
  }

  get color() {
    return PLAYER_COLORS[this.slot];
  }

  get gold() {
    return this.reliableGold + this.unreliableGold;
  }

  get gpm() {
    const { clockTime } = this.replay.game;
    if (!clockTime || clockTime <= 0) {
      return 0;
    }
    return Math.round((this.totalEarnedGold / clockTime) * 60);
  }

  get hero() {
    return this.replay.units.get(this.heroID);
  }

  get index() {
    return String(this.slot).padStart(4, '0');
  }

  get isConnected() {
    return this.connectionState === CONNECTION_STATE.CONNECTED;
  }

  get isPlayer() {
    return this.teamID === TEAM_RADIANT || this.teamID === TEAM_DIRE;
  }

  get isProPlayer() {
    return !!lookupProPlayer(this.steamID);
  }

  get isSpectator() {
    return this.teamID === TEAM_SPECTATORS;
  }

  get kda() {
    return (this.kills + this.assists) / (this.deaths + 1);
  }

  get level() {
    return this.hero?.level;
  }

  get name() {
    return lookupProPlayer(this.steamID)?.name || this.nickname;
  }

  get slot() {
    return this.id / this.replay.stepPlayerID;
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }

  get xpm() {
    const { clockTime } = this.replay.game;
    if (!clockTime || clockTime <= 0) {
      return 0;
    }
    return Math.round((this.totalEarnedXP / clockTime) * 60);
  }
}

export default Player;
