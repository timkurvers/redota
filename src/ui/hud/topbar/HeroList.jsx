import React from 'react';
import styled from 'styled-components';

import { HStack } from '../../components/index.js';

import HeroListEntry from './HeroListEntry.jsx';

const StyledHeroList = styled(HStack)`
  & img {
    display: block;
  }
`;

const HeroList = (props) => {
  const { heroes, setSelection } = props;
  return (
    <StyledHeroList>
      {heroes.map((hero) => (
        <HeroListEntry
          key={hero.id}
          {...hero}
          onClick={() => setSelection(hero.id)}
        />
      ))}
    </StyledHeroList>
  );
};

export default HeroList;
