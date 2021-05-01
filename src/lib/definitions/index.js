/* eslint-disable no-param-reassign */

import heroesByName from 'dotaconstants/build/hero_names.json';

export { default as itemsByName } from 'dotaconstants/build/items.json';
export { default as xpPerLevel } from 'dotaconstants/build/xp_level.json';

export { default as gameModesByID } from './gameModesByID.js';
export { default as unitsByName } from './unitsByName.js';

const heroesByID = Object.values(heroesByName).reduce((lookup, hero) => {
  lookup[hero.id] = hero;
  return lookup;
}, {});

export { heroesByID, heroesByName };
