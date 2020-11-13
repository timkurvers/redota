import React from 'react';
import styled from 'styled-components';

import { HeroResource } from '../../components/index.js';

const StyledPortrait = styled.div`
  cursor: pointer;

  & img {
    width: 138px;
  }
`;

const Portrait = (props) => {
  const { hero, onClick } = props;
  return (
    <StyledPortrait onClick={onClick}>
      <HeroResource name={hero} variant="portrait" />
    </StyledPortrait>
  );
};

export default Portrait;
export { StyledPortrait };
