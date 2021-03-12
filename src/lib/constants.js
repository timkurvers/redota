export const MAP_SIZE = 32768;
export const MAP_HALF_SIZE = MAP_SIZE / 2;
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

export const GAME_PHASE = {
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
