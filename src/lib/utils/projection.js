/* eslint-disable import/prefer-default-export */

import { MAP_HALF_SIZE } from '../constants.js';

// Scales given coordinate value to a percentage between -1.0 (0%) and 1.0 (100%)
export const scale = (value) => value / MAP_HALF_SIZE;
