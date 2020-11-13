import React from 'react';
import styled, { css } from 'styled-components';

import { AbilityResource, HStack, VStack } from '../../components/index.js';

const StyledAbility = styled.div`
  margin: 5px;

  & img {
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

const Ability = (props) => {
  // TODO: Retrieve abilities for given hero
  const hero = 'phoenix';
  const { name } = props;
  return (
    <StyledAbility>
      <VStack>
        <AbilityResource hero={hero} name={name} />
        <HStack justify="center">
          <StyledAbilityLevel acquired />
          <StyledAbilityLevel acquired />
          <StyledAbilityLevel />
        </HStack>
      </VStack>
    </StyledAbility>
  );
};

const Abilities = (props) => {
  const { hero } = props;
  return (
    <HStack>
      <Ability hero={hero} name="icarus_dive" />
      <Ability hero={hero} name="fire_spirits" />
      <Ability hero={hero} name="sun_ray" />
      <Ability hero={hero} name="supernova" />
    </HStack>
  );
};

export default Abilities;
