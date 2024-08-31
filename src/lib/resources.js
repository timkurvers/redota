const BUNDLED_BASE_URL = './images';

const CDN_BASE_URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images';

const MISSING_ABILITY_RESOURCES = [
  'ancient_rock_golem_weakening_aura',
  'berserker_troll_break',
  'black_drake_magic_amplification_aura',
  'creep_irresolute',
  'creep_piercing',
  'creep_siege',
  'enraged_wildkin_hurricane',
  'fel_beast_haunt',
  'flagbearer_creep_aura_effect',
  'forest_troll_high_priest_heal_amp_aura',
  'frostbitten_golem_time_warp_aura',
  'furbolg_enrage_attack_speed',
  'furbolg_enrage_damage',
  'giant_wolf_intimidate',
  'harpy_scout_take_off',
  'hill_troll_rally',
  'ice_shaman_incendiary_bomb',
  'kobold_disarm',
  'kobold_tunneler_prospecting',
  'miniboss_unyielding_shield',
  'miniboss_reflect',
  'ogre_bruiser_ogre_smash',
  'roshan_revengeroar',
  'warpine_raider_seed_shot',
];

const MISSING_HERO_RESOURCES = [
  'dawnbreaker',
  'marci',
  'muerta',
  'primal_beast',
];

const KNOWN_DUMMY_UNITS = [
  'npc_dota_base_additive',
  'npc_dota_base',
  'npc_dota_broodmother_web',
  'npc_dota_companion',
  'npc_dota_thinker',
];

// See: http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever
const EMPTY_RESOURCE = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export const abilityResourceFor = (refname) => {
  if (!refname) return EMPTY_RESOURCE;

  // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_winters_curse.png

  // Various abilities lack images on CDN so use bundled
  let base = `${CDN_BASE_URL}/dota_react`;
  if (MISSING_ABILITY_RESOURCES.includes(refname)) {
    base = BUNDLED_BASE_URL;
  }
  return `${base}/abilities/${refname}.png`;
};

export const heroResourceFor = (refname, variant) => {
  if (!refname) return EMPTY_RESOURCE;

  const heroname = refname.replace('npc_dota_hero_', '');

  let suffix = null;
  switch (variant) {
    case 'portrait':
      // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phoenix_vert.jpg
      suffix = '_vert.jpg';
      break;
    default:
    case 'landscape':
      // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/oracle_sb.png
      suffix = '_sb.png';
      break;
    case 'icon':
      // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/shadow_shaman_icon.png
      suffix = '_icon.png';
      break;
  }

  // Various new heroes lack portrait and low-bandwidth images on legacy CDN so use bundled
  let base = CDN_BASE_URL;
  if (MISSING_HERO_RESOURCES.includes(heroname)) {
    base = BUNDLED_BASE_URL;
  }
  return `${base}/heroes/${heroname}${suffix}`;
};

export const itemResourceFor = (refname) => {
  if (!refname) return EMPTY_RESOURCE;

  // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png
  let itemname = refname.replace('item_', '');

  // TODO: Overrides should preferably not be in the UI
  if (itemname.startsWith('recipe_')) {
    itemname = 'recipe';
  }
  return `${CDN_BASE_URL}/dota_react/items/${itemname}.png`;
};

export const teamLogoResourceFor = (teamID) => (
  // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams/36.png
  `${CDN_BASE_URL}/dota_react/teams/${teamID}.png`
);

export const unitResourceFor = (refname, variant) => {
  if (!refname || KNOWN_DUMMY_UNITS.includes(refname)) {
    return EMPTY_RESOURCE;
  }
  switch (variant) {
    case 'portrait':
      // Example: ./images/portraits/npc_dota_roshan.jpg
      return `${BUNDLED_BASE_URL}/portraits/${refname}.jpg`;
    case 'icon':
      // Example: ./images/icons/npc_dota_lone_druid_bear.png
      return `${BUNDLED_BASE_URL}/icons/${refname}.png`;
    default:
      return null;
  }
};
