import React, { useCallback } from 'react';
import styled from 'styled-components';

import {
  abilityResourceFor,
  heroResourceFor,
  itemResourceFor,
  teamLogoResourceFor,
  unitResourceFor,
} from '../../lib/resources.js';

const StyledResource = styled.img`
  user-select: none;
`;

const Resource = (props) => {
  const { alt, src, title } = props;

  const preventDragging = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <StyledResource
      src={src}
      draggable="false"
      // TODO: Determine alt text for these resources
      alt={alt}
      title={title}
      onDragStart={preventDragging}
    />
  );
};

const AbilityResource = React.memo((props) => {
  const { name, refname } = props;
  return <Resource alt={name} src={abilityResourceFor(refname)} title={name} />;
});

const HeroResource = React.memo((props) => {
  const { refname, variant } = props;
  return <Resource src={heroResourceFor(refname, variant)} />;
});

const ItemResource = React.memo((props) => {
  const { name, refname } = props;
  return <Resource alt={name} src={itemResourceFor(refname)} title={name} />;
});

const TeamLogoResource = React.memo((props) => {
  const { alt, teamID } = props;
  return <Resource alt={alt} src={teamLogoResourceFor(teamID)} title={alt} />;
});

const UnitResource = React.memo((props) => {
  const { refname, variant } = props;
  const src = unitResourceFor(refname, variant);
  if (!src) return null;
  return <Resource src={src} />;
});

const UnitOrHeroResource = React.memo((props) => {
  const { unit, unit: { refname }, variant } = props;
  if (unit.type === 'hero') {
    return <HeroResource refname={refname} variant={variant} />;
  }
  return <UnitResource refname={refname} variant={variant} />;
});

export {
  AbilityResource,
  HeroResource,
  ItemResource,
  TeamLogoResource,
  StyledResource,
  UnitOrHeroResource,
  UnitResource,
};
