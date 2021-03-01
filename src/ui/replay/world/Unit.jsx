import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, Level, StyledLevel, UnitOrHeroResource,
} from '../../components/index.js';
import { Hero } from '../../../lib/replay/entities/index.js';

const StyledUnit = styled(ActiveFilter)`
  ${(props) => props.size === 'large' && css`
    width: 30px;
    height: 30px;
  `}
  padding: 10px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.color}DD;
  ${(props) => props.selected && css`
    border-color: white;
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
    color, handle, isDead, isWaitingToSpawn, position: { relX, relY },
  } = unit;

  if (isWaitingToSpawn) {
    return null;
  }

  const isHero = unit instanceof Hero;
  return (
    <StyledUnit
      active={!isDead}
      translucentWhenInactive
      color={color}
      onClick={() => onClick(handle)}
      selected={selected}
      size={isHero ? 'large' : 'default'}
      style={{ left: `${relX * 100}%`, bottom: `${relY * 100}%` }}
    >
      <UnitOrHeroResource unit={unit} variant="icon" />
      {isHero && (
        <Level xp={unit.xp} size="small">{unit.level}</Level>
      )}
    </StyledUnit>
  );
});

export default Unit;
