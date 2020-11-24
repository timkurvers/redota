import React from 'react';
import styled, { css } from 'styled-components';

import {
  HeroResource, Level, StyledLevel,
} from '../components/index.js';

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

  ${StyledLevel} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`;

const Entity = (props) => {
  const {
    id, refname, hp, level, xp,
    color, onClick, selected, x, y, type,
  } = props;

  return (
    <StyledEntity
      color={color}
      onClick={() => onClick(id)}
      selected={selected}
      style={{ left: `${x}px`, bottom: `${y}px` }}
    >
      {type === 'hero' && (
        <>
          <HeroResource refname={refname} variant="icon" />
          <Level xp={xp} size="small">{level}</Level>
        </>
      )}
    </StyledEntity>
  );
};

export default React.memo(Entity);
