import React from 'react';

const CDN_URL = 'https://steamcdn-a.akamaihd.net/apps/dota2/images';

const Resource = (props) => {
  const { path } = props;
  const fqpath = `${CDN_URL}/${path}`;
  return (
    <img
      src={fqpath}
      draggable="false"
      // TODO: Determine alt text for these resources
      alt=""
    />
  );
};

const AbilityResource = (props) => {
  const { name, hero } = props;
  const path = `/abilities/${hero}_${name}_md.png`;
  return <Resource path={path} />;
};

const HeroResource = (props) => {
  const { name, variant } = props;

  let suffix = 'full.png';
  switch (variant) {
    case 'portrait':
      suffix = 'vert.jpg';
      break;
    case 'landscape':
      suffix = 'sb.png';
      break;
    case 'icon':
      suffix = 'icon.png';
      break;
    default:
      suffix = 'full.png';
      break;
  }
  return <Resource path={`heroes/${name}_${suffix}`} />;
};

const ItemResource = (props) => {
  const { name } = props;
  return <Resource path={`items/${name}_lg.png`} />;
};

export default Resource;
export { AbilityResource, HeroResource, ItemResource };
