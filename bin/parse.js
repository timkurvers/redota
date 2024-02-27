#!/usr/bin/env node --experimental-json-modules

/* eslint-disable no-console */

import fs from 'fs';

import Parser from '../src/lib/parser/Parser.js';
import Replay from '../src/lib/replay/Replay.js';

const [,, ...args] = process.argv;

const cmd = args.sort().join(' ');
const match = cmd.match(/(?:--(?<level>low|high)-level )?(?<file>.*)/);

const { file, level = 'low' } = match.groups;
if (!file) {
  throw new Error('no replay .dem-file provided');
}

console.time('time taken');

// Full length parse of given replay file for debugging purposes
const buffer = fs.readFileSync(file);

let parser;
if (level === 'high') {
  const replay = new Replay(buffer);
  parser = replay.parser;
} else if (level === 'low') {
  parser = new Parser(buffer);
}
console.log('summary', parser.summary);

parser.on('msg:CDemoFileHeader', (msg) => {
  console.log('header', msg);
});

parser.on('msg:CUserMessageSayText2', (msg) => {
  console.log('all chat', `${msg.param1}: ${msg.param2}`);
});

parser.start();
console.log('# of entities at replay start:', parser.entities.size);

parser.play();
console.log('# of entities at replay end:', parser.entities.size);

console.timeEnd('time taken');
