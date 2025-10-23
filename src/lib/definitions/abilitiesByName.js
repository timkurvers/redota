/* eslint-disable no-param-reassign */

import { abilities as baseAbilitiesByName } from 'dotaconstants';

// Ignore attributes in the OpenDota definition that result in wrong max levels
const IGNORE_ATTRIBUTES = [
  'epicenter_radius',
  'lifestealer_open_wounds',
];

const abilitiesByName = Object.entries(baseAbilitiesByName).reduce((lookup, [name, definition]) => {
  const {
    attrib = [], behavior, cd, dmg, mc, is_innate,
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
  // TODO: Contribute to OpenDota's dotaconstants to include max level properly
  let maxLevel = 1;
  for (const entry of entries) {
    if (Array.isArray(entry)) {
      maxLevel = entry.length;
      break;
    }
  }

  // Whether this ability is passive or innate
  const isPassive = behavior && (behavior === 'Passive' || behavior.includes('Passive'));

  // Augment the ability definition
  lookup[name] = {
    ...definition,
    maxLevel,
    isInnate: !!is_innate,
    isPassive,
  };

  return lookup;
}, {});

export default abilitiesByName;
