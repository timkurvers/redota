/* eslint-disable import/prefer-default-export */

import axios, { CancelToken } from 'axios';

import { TEAM_DIRE, TEAM_RADIANT } from '../constants.js';
import { heroesByID } from '../definitions/index.js';

const API_BASE = 'https://api.opendota.com/api';
const REPLAY_PROXY_BASE = 'https://redota.timkurvers.workers.dev';

export const fetchRequest = (url, options = {}) => {
  const source = CancelToken.source();

  // Request returning an axios-backed Promise when invoked
  const request = () => (
    axios.request({
      timeout: 10000,
      method: 'get',
      ...options,
      cancelToken: source.token,
      url,
    })
  );

  // Attach cancellation function to request
  request.cancel = () => {
    source.cancel();
  };

  return request;
};

export const fetchMatchRequest = (id, options) => (
  fetchRequest(`${API_BASE}/matches/${id}`, options)
);

export const fetchReplayRequest = (url, options) => (
  fetchRequest(`${REPLAY_PROXY_BASE}/?replay=${url}`, {
    ...options,
    responseType: 'blob',

    // Waive timeout as these replay files (50 MB+) may take a while to download
    timeout: 0,
  })
);

// Construct an object similar in structure to ReDota's Match database entity
// from OpenDota's match response data for preview purposes
export const createMatchlikeFrom = (data) => ({
  replayURL: data.replay_url,

  matchID: data.match_id,
  leagueID: data.leagueid,
  duration: data.duration,
  endedAt: new Date((data.start_time + data.duration) * 1000),
  winningTeamID: data.radiant_win ? TEAM_RADIANT : TEAM_DIRE,

  radiant: {
    name: data.radiant_team?.tag,
    proID: data.radiant_team?.team_id,
    players: data.players.filter((p) => p.isRadiant).map((p) => ({
      hero: heroesByID[p.hero_id].name,
    })),
  },
  dire: {
    name: data.dire_team?.tag,
    proID: data.dire_team?.team_id,
    players: data.players.filter((p) => !p.isRadiant).map((p) => ({
      hero: heroesByID[p.hero_id].name,
    })),
  },
});
