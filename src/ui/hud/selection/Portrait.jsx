import React from 'react';
import styled from 'styled-components';

import { HeroResource } from '../../components/index.js';

const StyledPortrait = styled.div`
  width: 138px;
  cursor: pointer;

  & img {
    width: 138px;
  }
`;

const Portrait = (props) => {
  const { hero, onClick } = props;
  return (
    <StyledPortrait onClick={onClick}>
      {hero && <HeroResource refname={hero} variant="portrait" />}
    </StyledPortrait>
  );
};

export default Portrait;
export { StyledPortrait };
