import React from 'react';

import Hero from '../../lib/replay/entities/Hero.js';
import {
  abilityResourceFor,
  heroResourceFor,
  itemResourceFor,
  teamLogoResourceFor,
  unitResourceFor,
} from '../../lib/resources.js';

const Resource = (props) => {
  const { alt, src } = props;
  return (
    <img
      src={src}
      draggable="false"
      // TODO: Determine alt text for these resources
      alt={alt}
      style={{ userSelect: 'none' }}
    />
  );
};

const AbilityResource = React.memo((props) => {
  const { refname } = props;
  return <Resource src={abilityResourceFor(refname)} />;
});

const HeroResource = React.memo((props) => {
  const { refname, variant } = props;
  return <Resource src={heroResourceFor(refname, variant)} />;
});

const ItemResource = React.memo((props) => {
  const { refname } = props;
  return <Resource src={itemResourceFor(refname)} />;
});

const TeamLogoResource = React.memo((props) => {
  const { alt, teamID } = props;
  return <Resource alt={alt} src={teamLogoResourceFor(teamID)} />;
});

const UnitResource = React.memo((props) => {
  const { refname, variant } = props;
  const src = unitResourceFor(refname, variant);
  if (!src) return null;
  return <Resource src={src} />;
});

const UnitOrHeroResource = React.memo((props) => {
  const { unit, unit: { refname }, variant } = props;
  if (unit instanceof Hero) {
    return <HeroResource refname={refname} variant={variant} />;
  }
  return <UnitResource refname={refname} variant={variant} />;
});

export {
  AbilityResource,
  HeroResource,
  ItemResource,
  TeamLogoResource,
  UnitOrHeroResource,
  UnitResource,
};
