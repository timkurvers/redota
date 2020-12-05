import React from 'react';
import styled from 'styled-components';

import ActiveFilter from './ActiveFilter.jsx';

const StyledText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Cooldown = (props) => {
  const { children, remaining } = props;
  const isCoolingDown = remaining > 0;
  return (
    <>
      {isCoolingDown && <StyledText>{Math.ceil(remaining)}</StyledText>}
      <ActiveFilter active={!isCoolingDown}>
        {children}
      </ActiveFilter>
    </>
  );
};

export default Cooldown;
