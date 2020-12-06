/* eslint-disable react/no-array-index-key */

import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  AbilitySlot, ActiveFilter, HStack, VStack,
} from '../../../components/index.js';

const StyledAbility = styled(VStack)`
  margin: 11px 6px 14px;
  justify-content: space-between;
`;

const StyledAbilityLevel = styled.div`
  flex: 1;
  min-width: 3px;
  max-width: 8px;
  height: 3px;
  margin: 0 3px;
  background: darkgray;
  box-shadow: 1px 1px 1px #111,
              -1px 1px 1px #111,
              1px -1px 1px #111,
              -1px -1px 1px #111;

  ${(props) => props.acquired && css`
    background: #FFCC00;
  `}
`;

const Ability = observer((props) => {
  const { ability } = props;
  const { level } = ability;
  const levels = new Array(level).fill();
  return (
    <StyledAbility>
      <ActiveFilter active={level >= 1}>
        <AbilitySlot ability={ability} />
      </ActiveFilter>
      <HStack justify="center">
        {/* TODO: Render unacquired levels, too */}
        {levels.map((_, index) => (
          <StyledAbilityLevel key={index} acquired />
        ))}
      </HStack>
    </StyledAbility>
  );
});

const StyledAbilities = styled(HStack)`
  flex: 1;
`;

const Abilities = observer((props) => {
  const { abilities = [] } = props;
  return (
    <StyledAbilities>
      {abilities.map((ability) => (
        !ability.hidden && <Ability key={ability.handle} ability={ability} />
      ))}
    </StyledAbilities>
  );
});

export default Abilities;
