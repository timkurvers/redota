import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import { AbilityResource, HStack, VStack } from '../../../components/index.js';

const StyledAbility = styled.div`
  margin: 5px;

  img {
    width: 60px;
    border: 1px solid darkgray;
  }
`;

const StyledAbilityLevel = styled.span`
  margin: 4px;
  color: darkgray;

  ${(props) => props.acquired && css`
    color: #FFCC00;
  `}

  &:after {
    content: '–';
  }
`;

const Ability = observer((props) => {
  const { ability } = props;
  const { refname } = ability;
  return (
    <StyledAbility>
      <VStack>
        <AbilityResource refname={refname} />
        <HStack justify="center">
          <StyledAbilityLevel acquired />
          <StyledAbilityLevel acquired />
          <StyledAbilityLevel />
        </HStack>
      </VStack>
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
