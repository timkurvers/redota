import React from 'react';
import styled from 'styled-components';

import {
  Bar, HStack, Level, StyledLevel, VStack,
} from '../../components/index.js';

import Abilities from './Abilities.jsx';
import Inventory, { StyledInventory } from './Inventory.jsx';
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
    left: 70px;
    transform: translateX(-50%);
  }

  ${StyledLevel} {
    position: absolute;
    left: 0;
    bottom: 75px;
    transform: translateX(-50%);
  }

  ${StyledPortrait} {
    margin-right: 15px;
  }

  ${StyledInventory} {
    margin-left: 8px;
  }
`;

const Selection = (props) => {
  const { selectedEntity, setSelection } = props;
  if (!selectedEntity) {
    return null;
  }

  const {
    id, dead, name, refname, hp, hpMax, mp, mpMax, level, team, xp,
  } = selectedEntity;

  return (
    <StyledSelection>
      <Name>{name}</Name>
      {level && <Level xp={xp}>{level}</Level>}
      <Portrait dead={dead} hero={refname} onClick={() => setSelection(id)} />
      <VStack>
        <Abilities />
        <Bar type="health" value={hp} max={hpMax} team={team} />
        <Bar type="mana" value={mp} max={mpMax} />
      </VStack>
      <Inventory />
    </StyledSelection>
  );
};

export default Selection;
