import { composeComparisons, compareByPropDesc } from '../../../../lib/utils/index.js';

// Hotkeys retrieved from: https://dota2.fandom.com/wiki/Hotkeys#Stats_Dropdown
export default {
  kda: {
    label: 'Kills / Deaths / Assists',
    hotkey: 'Q',
    sort: composeComparisons(
      compareByPropDesc('kda'),
      compareByPropDesc('kills'),
      compareByPropDesc('deaths'),
      compareByPropDesc('assists'),
    ),
    renderer: (player) => `${player.kills} / ${player.deaths} / ${player.assists}`,
  },
  lhd: {
    label: 'Last Hits / Denies',
    hotkey: 'W',
    sort: composeComparisons(
      compareByPropDesc('lastHits'),
      compareByPropDesc('denies'),
    ),
    renderer: (player) => `${player.lastHits} / ${player.denies}`,
  },
  level: {
    label: 'Hero Level',
    hotkey: 'E',
    sort: compareByPropDesc('level'),
    value: (player) => player.level,
  },
  // xpmin: {
  //   label: 'XP Per Minute',
  //   hotkey: 'R',
  //   sort: compareByPropDesc('xpm'),
  //   value: (player) => player.xpm,
  // },
  // gold: {
  //   label: 'Current Gold',
  //   hotkey: 'T',
  //   sort: compareByPropDesc('gold'),
  //   value: (player) => player.gold,
  // },
  networth: {
    label: 'Net Worth',
    hotkey: 'Y',
    sort: compareByPropDesc('networth'),
    value: (player) => player.networth,
  },
  // gpm: {
  //   label: 'Gold Per Minute',
  //   hotkey: 'U',
  //   sort: compareByPropDesc('gpm'),
  //   value: (player) => player.gpm,
  // },
  // buyback: {
  //   label: 'Buyback Status',
  //   hotkey: 'I',
  //   sort: compareByPropDesc('hasBuyback'),
  //   renderer: (player) => player.hasBuyback,
  // },
};
