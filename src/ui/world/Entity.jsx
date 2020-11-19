import React from 'react';
import styled, { css } from 'styled-components';

import { HeroResource } from '../components/index.js';

const StyledEntity = styled.div`
  ${(props) => props.type === 'hero' && css`
    width: 30px;
    height: 30px;
  `}
  padding: 10px;
  border-radius: 50%;
  ${(props) => props.selected && css`
    border: 3px solid white;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${(props) => props.color}AA;
  cursor: pointer;

  & img {
    display: block;
  }
`;

const Entity = (props) => {
  const {
    color, onClick, selected, name, x, y, type,
  } = props;

  return (
    <StyledEntity
      color={color}
      onClick={onClick}
      selected={selected}
      style={{ left: `${x}px`, bottom: `${y}px` }}
    >
      {type === 'hero' && <HeroResource name={name} variant="icon" />}
    </StyledEntity>
  );
};

export default Entity;
