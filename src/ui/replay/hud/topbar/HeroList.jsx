import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { HStack } from '../../../components/index.js';

import HeroListEntry from './HeroListEntry.jsx';

const StyledHeroList = styled(HStack)`
  img {
    display: block;
  }
`;

const HeroList = observer((props) => {
  const { heroes, setSelection } = props;
  return (
    <StyledHeroList>
      {heroes.map((hero) => (
        <HeroListEntry
          key={hero.handle}
          hero={hero}
          onClick={() => setSelection(hero.handle)}
        />
      ))}
    </StyledHeroList>
  );
});

export default HeroList;
