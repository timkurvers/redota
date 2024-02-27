#!/usr/bin/env node --experimental-json-modules

/* eslint-disable no-console */

import fs from 'fs';

import Reader from '../src/lib/parser/Reader.js';

const HEADER_SIZE = 64;

const [,, vrman] = process.argv;
if (!vrman) {
  throw new Error('no .vrman_c-file to parse provided');
}

// Poor man's parser for a Valve Resource Manifest (vrman_c) file, extracting
// external references (tested mainly on scripts/prewarm.vrman_c)
const buffer = fs.readFileSync(vrman);
const reader = new Reader(buffer);
reader.pos = HEADER_SIZE;

const entries = [];
try {
  while (!reader.eof) {
    const id = reader.readUint64LE();
    const nameptr = Number(reader.readUint64LE());
    const { pos } = reader;
    reader.pos = pos + nameptr - 8;
    const name = reader.readString();
    reader.pos = pos;
    entries.push({ id, nameptr, name });
  }
} catch (e) {
  // Bail out as soon as we crash into another block of this manifest file
}

for (const entry of entries) {
  if (!entry.name.includes('.vmdl')) {
    continue;
  }
  console.log(entry.id, entry.name);
}
