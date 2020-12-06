import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, HeroResource, Level, StyledLevel,
} from '../../components/index.js';
import { Hero } from '../../../lib/replay/entities/index.js';

import { scale } from './projection.js';

const StyledUnit = styled(ActiveFilter)`
  ${(props) => props.size === 'large' && css`
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

  img {
    display: block;
  }

  ${StyledLevel} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`;

const Unit = observer((props) => {
  const { onClick, selected, unit } = props;
  const {
    handle, isDead, color, x, y,
  } = unit;
  const isHero = unit instanceof Hero;
  return (
    <StyledUnit
      active={!isDead}
      translucentWhenInactive
      color={color}
      onClick={() => onClick(handle)}
      selected={selected}
      size={isHero ? 'large' : 'default'}
      style={{ left: `${scale(x)}px`, bottom: `${scale(y)}px` }}
    >
      {isHero && (
        <>
          <HeroResource refname={unit.refname} variant="icon" />
          <Level xp={unit.xp} size="small">{unit.level}</Level>
        </>
      )}
    </StyledUnit>
  );
});

export default Unit;
