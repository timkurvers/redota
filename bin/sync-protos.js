#!/usr/bin/env node
/* eslint-disable no-await-in-loop */

import fs from 'fs';
import https from 'https';
import path from 'path';

const download = async (remote, local) => {
  const file = fs.createWriteStream(local);
  return new Promise((resolve, reject) => {
    https.get(remote, (res) => {
      res.on('error', reject);

      const stream = res.pipe(file);
      stream.on('finish', resolve);
    });
  });
};

const remoteBaseURL = 'https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/Protobufs';

const localFolder = './dota';
const protos = fs.readdirSync(localFolder);

(async () => {
  for (const proto of protos) {
    if (!proto.endsWith('.proto')) {
      continue;
    }

    process.stdout.write(`processing ${proto}..`);
    await download(
      path.join(remoteBaseURL, proto),
      path.join(localFolder, proto),
    );
    process.stdout.write(' done.\n');
  }
})();
