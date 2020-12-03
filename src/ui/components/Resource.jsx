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

const AbilityResource = React.memo((props) => {
  const { refname, hero } = props;
  const path = `/abilities/${hero}_${refname}_md.png`;
  return <Resource path={path} />;
});

const HeroResource = React.memo((props) => {
  const { refname, variant } = props;

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
  return <Resource path={`heroes/${refname}_${suffix}`} />;
});

const ItemResource = React.memo((props) => {
  const { refname } = props;
  return <Resource path={`items/${refname}_lg.png`} />;
});

const TeamLogoResource = React.memo((props) => {
  const { teamID } = props;
  return <Resource path={`team_logos/${teamID}.png`} />;
});

export default Resource;
export {
  AbilityResource, HeroResource, ItemResource, TeamLogoResource,
};
