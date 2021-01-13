/* eslint-disable import/prefer-default-export */

import { MAP_HALF_SIZE } from '../constants.js';

// Scales given in-game coordinate to a value between -0.5 (0%) and 0.5 (100%)
export const scale = (value) => value / MAP_HALF_SIZE;
