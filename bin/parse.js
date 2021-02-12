#!/usr/bin/env node --experimental-json-modules

import fs from 'fs';

import Parser from '../src/lib/parser/Parser.js';

const [,, replay] = process.argv;
if (!replay) {
  throw new Error('no replay .dem-file provided');
}

// Full low-level parse of given replay file for debugging purposes
const buffer = fs.readFileSync(replay);
const parser = new Parser(buffer);

parser.on('msg:CDemoFileHeader', (msg) => {
  console.log('header', msg);
});

parser.on('msg:CUserMessageSayText2', (msg) => {
  console.log('all chat', `${msg.param1}: ${msg.param2}`);
});

console.time('time taken');

parser.start();
console.log('# of entities at replay start:', parser.entities.size);

parser.play();
console.log('# of entities at replay end:', parser.entities.size);

console.timeEnd('time taken');
