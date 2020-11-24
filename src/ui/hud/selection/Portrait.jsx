import React from 'react';
import styled from 'styled-components';

import { DeathFilter, HeroResource } from '../../components/index.js';

const StyledPortrait = styled(DeathFilter)`
  width: 138px;
  cursor: pointer;

  & img {
    width: 138px;
  }
`;

const Portrait = (props) => {
  const { dead, hero, onClick } = props;
  return (
    <StyledPortrait dead={dead} onClick={onClick}>
      {hero && <HeroResource refname={hero} variant="portrait" />}
    </StyledPortrait>
  );
};

export default Portrait;
export { StyledPortrait };
