import React from 'react';
import styled from 'styled-components';

import { UnitOrHeroResource } from '../../../components/index.js';

const StyledPortrait = styled.div`
  width: 138px;
  cursor: pointer;

  img {
    width: 138px;
  }
`;

const Portrait = (props) => {
  const { onClick, unit } = props;
  return (
    <StyledPortrait onClick={onClick}>
      <UnitOrHeroResource unit={unit} variant="portrait" />
    </StyledPortrait>
  );
};

export default React.memo(Portrait);
export { StyledPortrait };
