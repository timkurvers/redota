#!/usr/bin/env node --experimental-json-modules
/* eslint-disable no-param-reassign */

import fs from 'fs';

import unitsByName from '../src/lib/definitions/unitsByName.js';

// Parses Valve's item definition file (scripts/items/item_game.txt), extracts
// unit model variants relevant for ReDota and prints changes required (if any)

const [,, path] = process.argv;
if (!path) {
  throw new Error('no items_game.txt file to parse provided');
}

const raw = fs.readFileSync(path, 'utf8');

// Holds current and parsed state for unit variants using model matching
const registry = Object.entries(unitsByName).reduce((lookup, [key, definition]) => {
  if (definition.match && !definition.model.startsWith('models/props_structures')) {
    lookup[key] = {
      model: definition.model,
      current: new Set(definition.variants),
      parsed: new Set(),
    };
  }
  return lookup;
}, {});

// Valve's asset modifier properties are inconsistent and duplicated, so regex
// for `asset_modifier` as well as `asset_modifier0` through `asset_modifier110`
const ASSET_MODIFIER_REGEX = /"asset_modifier\d*"\s+{\s*"type"\s+"(?<type>[^"]+)"\s+"asset"\s+"(?<asset>[^"]+)"\s+"modifier"\s+"(?<modifier>[^"]+)"/g;

// Process unit model variants
for (const match of raw.matchAll(ASSET_MODIFIER_REGEX)) {
  const { type, asset, modifier } = match.groups;

  // Bail out if ReDota does not handle this unit
  if (!(asset in registry)) continue;

  // Only interested in modifiers that change the entity model
  if (type !== 'entity_model') continue;

  // Avoid adding the main model to the variant list
  if (modifier === registry[asset].model) continue;

  registry[asset].parsed.add(modifier);
}

// Filter unit model variants that require changes
const todo = Object.entries(registry).reduce((lookup, [key, { current, parsed }]) => {
  const target = [...parsed];
  const identical = current.size === parsed.size && target.every((e) => current.has(e));
  if (!identical) {
    lookup[key] = target;
  }
  return lookup;
}, {});

console.log(todo);
