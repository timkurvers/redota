import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Bar, HStack, Level, StyledLevel, VStack,
} from '../../../components/index.js';
import { Hero } from '../../../../lib/replay/entities/index.js';

import Abilities from './Abilities.jsx';
import Inventory from './Inventory.jsx';
import Name, { StyledName } from './Name.jsx';
import Portrait, { StyledPortrait } from './Portrait.jsx';

const StyledSelection = styled(HStack)`
  height: 160px;
  padding-bottom: 65px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  border-top-left-radius: 2px;

  ${StyledName} {
    position: absolute;
    top: -25px;
    left: 69px;
    transform: translateX(-50%);
  }

  ${StyledLevel} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${StyledPortrait} {
    margin-right: 8px;
  }
`;

const StyledCenter = styled(VStack)`
  min-width: 260px;
  margin: 0 10px;
`;

const Selection = observer((props) => {
  const { selectedUnit: unit, setSelection } = props;
  if (!unit) {
    return null;
  }

  // TODO: This is mightily inefficient as abilities, backpack etc. get computed
  // anew when any of these properties change.
  const {
    handle, name, hp, hpMax, mp, mpMax, level, teamID, xp,
    abilities, backpack, inventory, neutralItem, teleportScroll,
  } = unit;

  const onUnitSelect = useCallback(() => {
    setSelection(handle);
  }, [handle, setSelection]);

  const isHero = unit instanceof Hero;
  return (
    <StyledSelection>
      <Name>{name}</Name>
      {isHero && (
        <Level xp={xp}>{level}</Level>
      )}
      <Portrait unit={unit} onClick={onUnitSelect} />
      <StyledCenter>
        <Abilities abilities={abilities} />
        <Bar type="health" value={hp} max={hpMax} teamID={teamID} />
        <Bar type="mana" value={mp} max={mpMax} />
      </StyledCenter>
      {inventory && (
        <Inventory
          backpack={backpack}
          inventory={inventory}
          neutralItem={neutralItem}
          teleportScroll={teleportScroll}
        />
      )}
    </StyledSelection>
  );
});

export default Selection;
