export { default as heroesByID } from 'dotaconstants/build/heroes.json';
export { default as itemsByName } from 'dotaconstants/build/items.json';
export { default as xpPerLevel } from 'dotaconstants/build/xp_level.json';

export { default as abilitiesByName } from './abilitiesByName.js';
export { default as gameModesByID } from './gameModesByID.js';
export { default as heroesByName } from './heroesByName.js';
export { default as proPlayersByHash } from './proPlayersByHash.js';
export { default as unitsByName } from './unitsByName.js';

export const resolveAttrib = (definition, key, level) => {
  if (!definition || !definition.attrib) return null;

  const attr = definition.attrib.find((candidate) => candidate.key === key);
  if (!attr) return null;

  let { value } = attr;
  if (Array.isArray(value)) {
    value = value[level] ?? value[0];
  }
  return value;
};

export const resolveAttribNumber = (definition, key, level) => {
  const value = resolveAttrib(definition, key, level);
  if (!value) return null;

  let number = parseFloat(value);
  if (value.endsWith('%')) {
    number /= 100;
  }
  return number;
};
