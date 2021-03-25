import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Bar, Cooldown, HeroResource, PlayerColor,
} from '../../../components/index.js';

const StyledHeroListEntry = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`;

const HeroListEntry = observer((props) => {
  const { hero, setSelection } = props;
  const {
    color, handle, hp, hpMax, mp, mpMax, refname, respawnCooldown, teamID,
  } = hero;

  const onClick = useCallback(() => {
    setSelection(handle);
  }, [handle, setSelection]);

  return (
    <StyledHeroListEntry onClick={onClick}>
      <PlayerColor color={color} />
      <Cooldown remaining={respawnCooldown.remaining}>
        <HeroResource refname={refname} variant="landscape" />
        <Bar type="health" size="mini" value={hp} max={hpMax} teamID={teamID} />
        <Bar type="mana" size="mini" value={mp} max={mpMax} />
      </Cooldown>
    </StyledHeroListEntry>
  );
});

export default HeroListEntry;