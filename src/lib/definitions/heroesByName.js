/* eslint-disable no-param-reassign */

import { heroes as heroesByID } from 'dotaconstants';

const heroesByName = Object.values(heroesByID).reduce((lookup, hero) => {
  lookup[hero.name] = hero;
  return lookup;
}, {});

export default heroesByName;
