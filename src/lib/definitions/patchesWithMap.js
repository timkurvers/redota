import patches from 'dotaconstants/build/patch.json';
import { makeAutoObservable } from 'mobx';

// Map backdrop definitions (size is in Dota units; offset in CSS percentages)
const maps = [
  {
    id: '7.23',
    size: 16384,
    backdrop: {
      size: 4000,
      offset: { x: -0.2, y: 0.4 },
    },
  },
  {
    id: '7.33',
    size: 19134,
    backdrop: {
      size: 4700,
      offset: { x: -1.2, y: -0.3 },
    },
  },
];

// Holds list of patches (most recent first) augmented with date and map info
const patchesWithMap = [];

let currentIndex = 0;
for (const definition of patches) {
  const nextIndex = currentIndex + 1;
  const next = maps[nextIndex];

  if (definition.name === next?.id) {
    currentIndex = nextIndex;
  }

  patchesWithMap.unshift({
    ...definition,
    date: new Date(definition.date),
    map: maps[currentIndex],
  });
}

makeAutoObservable(patchesWithMap, { length: false });

export default patchesWithMap;
