export { heroes as heroesByID } from 'dotaconstants';
export { items as itemsByName } from 'dotaconstants';
export { xp_level as xpPerLevel } from 'dotaconstants';

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
