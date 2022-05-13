import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, Bar, Cooldown, HeroResource, Icon, PlayerColorStrip,
} from '../../../components/index.js';
import { useHotkey } from '../../../hooks/index.js';

const StyledDisconnectedIcon = styled(Icon).attrs(() => ({ name: 'plug' }))`
  color: #FF1700;
  font-size: 1.25em;
`;

const StyledHeroListEntry = styled.div`
  position: relative;
  min-width: 59px;
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }

  ${StyledDisconnectedIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledUltimate = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: 7px;
  left: 50%;
  z-index: 2;
  background-color: #23B200;
  border: 1px solid #008321;
  outline: 1px solid #222;
  transform: translate(-50%, 0) rotate(45deg);

  ${(props) => !props.ability.isReady && css`
    background-color: #222;
    border-color: #444 #555 #444 #333;
  `}
`;

const HeroListEntry = observer((props) => {
  const { hero, setSelection } = props;
  const {
    color, handle, hp, hpMax, mana, manaMax, player, refname, respawnCooldown, teamID,
    ultimateAbility,
  } = hero;

  // Quick-jump hotkey to this hero based on the player slot
  const hotkey = (player.slot + 1) % 10;
  useHotkey(`${hotkey}`, () => {
    setSelection(handle);
  }, [handle, setSelection]);

  const onClick = useCallback(() => {
    setSelection(handle);
  }, [handle, setSelection]);

  return (
    <StyledHeroListEntry onClick={onClick}>
      <PlayerColorStrip color={color} />
      <ActiveFilter active={player.isConnected}>
        <Cooldown remaining={respawnCooldown.remaining}>
          <HeroResource refname={refname} variant="landscape" />
          <Bar type="health" size="mini" value={hp} max={hpMax} teamID={teamID} />
          <Bar type="mana" size="mini" value={mana} max={manaMax} />
          {ultimateAbility && <StyledUltimate ability={ultimateAbility} />}
        </Cooldown>
      </ActiveFilter>
      {!player.isConnected && <StyledDisconnectedIcon />}
    </StyledHeroListEntry>
  );
});

export default HeroListEntry;
