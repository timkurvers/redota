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
  const { refname } = props;
  return (
    <StyledAbility>
      <VStack>
        <AbilityResource hero={hero} refname={refname} />
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
      <Ability hero={hero} refname="icarus_dive" />
      <Ability hero={hero} refname="fire_spirits" />
      <Ability hero={hero} refname="sun_ray" />
      <Ability hero={hero} refname="supernova" />
    </HStack>
  );
};

export default Abilities;
