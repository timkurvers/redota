const BUNDLED_BASE_URL = './images';

const CDN_BASE_URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images';

export const abilityResourceFor = (refname) => (
  // Example: https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/winter_wyvern_winters_curse.png
  `${CDN_BASE_URL}/dota_react/abilities/${refname}.png`
);

export const heroResourceFor = (refname, variant) => {
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
  if (heroname === 'dawnbreaker' || heroname === 'marci') {
    base = BUNDLED_BASE_URL;
  }
  return `${base}/heroes/${heroname}${suffix}`;
};

export const itemResourceFor = (refname) => {
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
