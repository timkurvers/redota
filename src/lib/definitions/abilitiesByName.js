/* eslint-disable no-param-reassign */

import baseAbilitiesByName from 'dotaconstants/build/abilities.json';

// Ignore attributes in the OpenDota definition that result in wrong max levels
const IGNORE_ATTRIBUTES = [
  'epicenter_radius',
  'lifestealer_open_wounds',
];

const abilitiesByName = Object.entries(baseAbilitiesByName).reduce((lookup, [name, definition]) => {
  const {
    attrib = [], cd, dmg, mc,
  } = definition;

  // Collect scaling values for attributes, cooldown, magic and manacost into a collection
  const entries = [
    ...attrib.map((attr) => {
      if (IGNORE_ATTRIBUTES.includes(attr.key)) return undefined;
      return attr.value;
    }),
    cd,
    dmg,
    mc,
  ];

  // Any array encountered in the above entries indicates the available levels
  let maxLevel = 1;
  for (const entry of entries) {
    if (Array.isArray(entry)) {
      maxLevel = entry.length;
      break;
    }
  }

  // Augment the ability definition with its maximum level
  lookup[name] = {
    ...definition,
    maxLevel,
  };

  return lookup;
}, {});

export default abilitiesByName;
