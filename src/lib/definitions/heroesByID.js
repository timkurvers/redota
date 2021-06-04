/* eslint-disable no-param-reassign */

import heroesByName from 'dotaconstants/build/hero_names.json';

const heroesByID = Object.values(heroesByName).reduce((lookup, hero) => {
  lookup[hero.id] = hero;
  return lookup;
}, {});

export default heroesByID;
