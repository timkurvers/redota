/* eslint-disable no-param-reassign */

import heroesByID from 'dotaconstants/build/heroes.json';

const heroesByName = Object.values(heroesByID).reduce((lookup, hero) => {
  lookup[hero.name] = hero;
  return lookup;
}, {});

export default heroesByName;
