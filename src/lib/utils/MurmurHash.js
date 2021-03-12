/* eslint-disable default-case, no-fallthrough */

import Reader from '../parser/Reader.js';

const SEED = 0xEDABCDEF;

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
const imul32 = (a, b) => ((a & 0xFFFF) * b) + ((((a >>> 16) * b) & 0xFFFF) << 16) >>> 0;

// See: https://github.com/skadistats/clarity/blob/master/src/main/java/skadistats/clarity/util/MurmurHash.java
const hash64 = (string, seed = SEED) => {
  const m = 0x5BD1E995;
  const r = 24;

  let h1 = seed ^ string.length;
  let h2 = 0;

  const buffer = Buffer.from(string);
  const reader = new Reader(buffer);

  while (reader.remaining >= 8) {
    let k1 = reader.readUint32LE();
    k1 = imul32(k1, m); k1 ^= k1 >>> r; k1 = imul32(k1, m);
    h1 = imul32(h1, m); h1 ^= k1;

    let k2 = reader.readUint32LE();
    k2 = imul32(k2, m); k2 ^= k2 >>> r; k2 = imul32(k2, m);
    h2 = imul32(h2, m); h2 ^= k2;
  }

  if (reader.remaining >= 4) {
    let k1 = reader.readUint32LE();
    k1 = imul32(k1, m); k1 ^= k1 >>> r; k1 = imul32(k1, m);
    h1 = imul32(h1, m); h1 ^= k1;
  }

  switch (reader.remaining) {
    case 3: h2 ^= (reader.buffer[reader.pos + 2] & 0xFF) << 16;
    case 2: h2 ^= (reader.buffer[reader.pos + 1] & 0xFF) << 8;
    case 1: h2 ^= (reader.buffer[reader.pos] & 0xFF);
            h2 = imul32(h2, m); // eslint-disable-line indent
  }

  h1 ^= h2 >>> 18; h1 = imul32(h1, m);
  h2 ^= h1 >>> 22; h2 = imul32(h2, m);
  h1 ^= h2 >>> 17; h1 = imul32(h1, m);
  h2 ^= h1 >>> 19; h2 = imul32(h2, m);

  const bh1 = BigInt(h1) & 0xFFFFFFFFn;
  const bh2 = BigInt(h2) & 0xFFFFFFFFn;
  return (bh1 << 32n) | bh2;
};

export default {
  hash64,
};
