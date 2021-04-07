import Dexie from 'dexie';
import 'dexie-observable';

import Match from './Match.js';

const db = new Dexie('redota');

db.version(1).stores({
  matches: '$$uuid, &matchID, endedAt',
});

db.models = {
  Match: Match.connect(db),
};

export default db;
