import React from 'react';
import styled, { css } from 'styled-components';

import { HeroResource } from '../components/index.js';

const StyledEntity = styled.div`
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
  ${(props) => props.selected && css`
    border: 3px solid white;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${(props) => props.color}88;
  cursor: pointer;
`;

const Entity = (props) => {
  const {
    color, onClick, selected, name, x, y,
  } = props;

  return (
    <StyledEntity
      color={color}
      onClick={onClick}
      selected={selected}
      style={{ left: `${x}px`, bottom: `${y}px` }}
    >
      <HeroResource name={name} variant="icon" />
    </StyledEntity>
  );
};

export default Entity;
