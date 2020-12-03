import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Bar, HStack, Level, StyledLevel, VStack,
} from '../../../components/index.js';

import Abilities from './Abilities.jsx';
import Inventory, { StyledInventory } from './Inventory.jsx';
import Name, { StyledName } from './Name.jsx';
import Portrait, { StyledPortrait } from './Portrait.jsx';
import Hero from '../../../../lib/replay/entities/Hero.js';

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
    left: 70px;
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
    margin-right: 15px;
  }

  ${StyledInventory} {
    margin-left: 8px;
  }
`;

const Selection = observer((props) => {
  const { selectedUnit, setSelection } = props;
  if (!selectedUnit) {
    return null;
  }

  const {
    eid, isDead, name, refname, hp, hpMax, mp, mpMax, level, teamID, xp,
  } = selectedUnit;

  // TODO: Support for couriers and Lone Druid bear
  const hasInventory = selectedUnit instanceof Hero;

  const onUnitSelect = useCallback(() => {
    setSelection(eid);
  }, [eid, setSelection]);

  return (
    <StyledSelection>
      <Name>{name}</Name>
      {level && <Level xp={xp}>{level}</Level>}
      <Portrait isDead={isDead} hero={refname} onClick={onUnitSelect} />
      <VStack>
        <Abilities />
        <Bar type="health" value={hp} max={hpMax} teamID={teamID} />
        <Bar type="mana" value={mp} max={mpMax} />
      </VStack>
      {hasInventory && <Inventory items={selectedUnit.inventory} />}
    </StyledSelection>
  );
});

export default Selection;
