import React from 'react';
import styled, { css } from 'styled-components';

const StyledPlayerColorStrip = styled.div`
  height: 3px;
  border-color: black;
  border-width: 1px;
  border-style: none none solid none;

  ${(props) => props.direction === 'vertical' && css`
    height: auto;
    width: 3px;
    border-style: solid none solid solid;
  `}
`;

const PlayerColorStrip = (props) => {
  const { color, direction = 'horizontal' } = props;
  return (
    <StyledPlayerColorStrip
      direction={direction}
      style={{ background: color }}
    />
  );
};

export default React.memo(PlayerColorStrip);
