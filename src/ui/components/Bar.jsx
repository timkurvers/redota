import React from 'react';
import styled, { css } from 'styled-components';

const StyledFill = styled.div`
  position: absolute;
  z-index: 1;
`;

const StyledText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  & span {
    margin: 5px;
  }
`;

const StyledBar = styled.div`
  position: relative;
  margin: 3px 0;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${(props) => props.size === 'default' && css`
    height: 25px;

    ${StyledFill} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${(props) => props.size === 'mini' && css`
    height: 3px;
    margin: 1px auto;

    ${StyledFill} {
      height: 100%;
    }
  `}
`;

const Bar = (props) => {
  let { color } = props;
  const {
    max, value, size = 'default', type,
  } = props;
  const pct = (value / max) * 100 | 0;

  if (type === 'health') {
    color = '#4D8A2F';
  } else if (type === 'mana') {
    color = '#466DDC';
  }

  return (
    <StyledBar size={size}>
      {size === 'default' && (
        <StyledText>
          {value | 0}
          <span>/</span>
          {max | 0}
        </StyledText>
      )}
      <StyledFill style={{ background: color, width: `${pct}%` }} />
    </StyledBar>
  );
};

export default Bar;
