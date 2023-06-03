export const MAP_CENTER = 128 * 128;
export const CELL_SIZE = 128;

export const PLAYER_COLORS = {
  [-1]: '#DDDDDD',
  0: '#3375FF',
  1: '#66FFBF',
  2: '#BF00BF',
  3: '#F3F00B',
  4: '#FF6B00',
  5: '#FE86C2',
  6: '#A1B447',
  7: '#65D9F7',
  8: '#008321',
  9: '#A46900',
};

// See DOTAConnectionState_t in dota/dota_shared_enums.proto
export const CONNECTION_STATE = {
  UNKNOWN: 0,
  NOT_YET_CONNECTED: 1,
  CONNECTED: 2,
  DISCONNECTED: 3,
  ABANDONED: 4,
  LOADING: 5,
  FAILED: 6,
};

// See DOTA_GameState in dota/dota_shared_enums.proto
export const GAME_PHASE = {
  INIT: 0,
  WAIT_FOR_PLAYERS_TO_LOAD: 1,
  HERO_SELECTION: 2,
  STRATEGY_TIME: 3,
  PRE_GAME: 4,
  GAME_IN_PROGRESS: 5,
  POST_GAME: 6,
  DISCONNECT: 7,

  // Deprecated
  PREGAME: 4,
  START: 5,
  END: 6,
};

export const TEAM_SPECTATORS = 1;
export const TEAM_RADIANT = 2;
export const TEAM_DIRE = 3;
export const TEAM_NEUTRAL = 4;
export const TEAM_COLORS = {
  [TEAM_RADIANT]: '#23B200',
  [TEAM_DIRE]: '#B21000',
  [TEAM_NEUTRAL]: '#CAAA32',
};
