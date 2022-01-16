import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Bar, Cooldown, HeroResource, PlayerColorStrip,
} from '../../../components/index.js';
import { useHotkey } from '../../../hooks/index.js';

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
    color, handle, hp, hpMax, mana, manaMax, player, refname, respawnCooldown, teamID,
  } = hero;

  // Quick-jump hotkey to this hero based on the player ID
  const hotkey = (player.id + 1) % 10;
  useHotkey(`${hotkey}`, () => {
    setSelection(handle);
  }, [handle, setSelection]);

  const onClick = useCallback(() => {
    setSelection(handle);
  }, [handle, setSelection]);

  return (
    <StyledHeroListEntry onClick={onClick}>
      <PlayerColorStrip color={color} />
      <Cooldown remaining={respawnCooldown.remaining}>
        <HeroResource refname={refname} variant="landscape" />
        <Bar type="health" size="mini" value={hp} max={hpMax} teamID={teamID} />
        <Bar type="mana" size="mini" value={mana} max={manaMax} />
      </Cooldown>
    </StyledHeroListEntry>
  );
});

export default HeroListEntry;
