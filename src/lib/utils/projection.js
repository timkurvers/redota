/* eslint-disable import/prefer-default-export */

const PRE_733_MAP_SIZE = 128 * 128;

// Scales given in-game coordinate to a value between -0.5 (0%) and 0.5 (100%)
export const scale = (value, mapSize = PRE_733_MAP_SIZE) => value / mapSize;
