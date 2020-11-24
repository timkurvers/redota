import React from 'react';
import styled from 'styled-components';

import {
  Bar, DeathFilter, HeroResource, PlayerColor,
} from '../../components/index.js';

const StyledHeroListEntry = styled.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`;

const HeroListEntry = (props) => {
  const {
    color, dead, id, hp, hpMax, mp, mpMax, refname, onClick, team,
  } = props;
  return (
    <StyledHeroListEntry onClick={onClick}>
      <PlayerColor color={color} />
      <DeathFilter dead={dead}>
        <HeroResource key={id} refname={refname} variant="landscape" />
        <Bar type="health" size="mini" value={hp} max={hpMax} team={team} />
        <Bar type="mana" size="mini" value={mp} max={mpMax} />
      </DeathFilter>
    </StyledHeroListEntry>
  );
};

export default HeroListEntry;
