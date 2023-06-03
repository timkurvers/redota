import { TEAM_DIRE, TEAM_RADIANT } from '../constants.js';

import patchesWithMap from '../definitions/patchesWithMap.js';

let db = null;
const table = 'matches';

class Match {
  constructor() {
    // Automatically populated UUID by dexie-observable
    this.uuid = undefined;

    this.replay = null;

    this.matchID = null;
    this.leagueID = null;
    this.duration = null;
    this.createdAt = new Date();
    this.endedAt = null;
    this.winningTeamID = null;

    this.teams = {};
  }

  get id() {
    return this.matchID || this.uuid;
  }

  get label() {
    return this.matchID || this.replay.filename;
  }

  get radiant() {
    return this.teams[TEAM_RADIANT];
  }

  get dire() {
    return this.teams[TEAM_DIRE];
  }

  get patch() {
    return patchesWithMap.find((patch) => this.endedAt >= patch.date) || patchesWithMap[0];
  }

  get winner() {
    return this.teams[this.winningTeamID];
  }

  delete() {
    return db[table].delete(this.uuid);
  }

  async update(blob) {
    const { default: Parser } = await import(
      /* webpackChunkName: 'parser+viewer' */ '../parser/Parser.js'
    );

    this.replay = {
      filename: blob.name,
      size: blob.size,
      blob,
    };

    const buffer = await blob.arrayBuffer();
    const parser = new Parser(buffer);

    const { summary } = parser;

    const gameInfo = summary.gameInfo?.dota;

    this.duration = summary.playbackTime;

    if (gameInfo) {
      this.matchID = gameInfo.matchId;
      this.leagueID = gameInfo.leagueid;
      this.endedAt = new Date(gameInfo.endTime * 1000);
      this.gameMode = gameInfo.gameMode;
      this.winningTeamID = gameInfo.gameWinner;

      this.teams = {};
      for (const player of gameInfo.playerInfo) {
        const teamID = player.gameTeam;
        let team = this.teams[teamID];
        if (!team) {
          team = {
            name: null,
            proID: null,
            players: [],
          };
          this.teams[teamID] = team;
        }
        team.players.push({
          hero: player.heroName,
        });
      }

      if (this.radiant) {
        this.radiant.name = gameInfo.radiantTeamTag;
        this.radiant.proID = gameInfo.radiantTeamId;
      }

      if (this.dire) {
        this.dire.name = gameInfo.direTeamTag;
        this.dire.proID = gameInfo.direTeamId;
      }
    } else {
      // Locally recorded replays lack the lineup information
      this.matchID = null;
      this.leagueID = null;
      this.endedAt = new Date(blob.lastModified);
      this.gameMode = -1;
      this.winningTeamID = null;
    }

    // TODO: Dispose of parser
  }

  async refresh() {
    if (this.replay) {
      await this.update(this.replay.blob);
    }
    return this.save();
  }

  save() {
    return db[table].put(this);
  }

  static get query() {
    return db[table];
  }

  static connect(root) {
    db = root;
    db[table].mapToClass(this);
    return this;
  }
}

export default Match;
