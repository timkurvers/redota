/* eslint-disable no-nested-ternary */

import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  ActiveFilter, Level, PlayerName, StyledLevel, StyledPlayerName, StyledResource,
  UnitOrHeroResource,
} from '../../components/index.js';
import { Building, Hero } from '../../../lib/replay/entities/index.js';

const StyledUnit = styled(ActiveFilter)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${(props) => props.isIllusion && props.active && css`
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  `}
  ${(props) => props.type === 'hero' && css`
    z-index: 2;
    ${() => props.active && !props.isIllusion && css`
      z-index: 3;
    `}
  `}
  ${(props) => props.type === 'building' && css`
    padding: 5px;
  `}
  ${(props) => props.isLarge && css`
    padding: 10px;
  `}
  border: 3px solid ${(props) => props.color}DD;
  ${(props) => props.selected && css`
    border-color: white;
    z-index: 4;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${(props) => props.color}AA;
  box-shadow: 1px 1px 1px #111;

  ${(props) => !props.isPhantom && css`
    cursor: pointer;
  `}

  ${(props) => props.isPhantom && css`
    width: 16px;
    height: 16px;
  `}

  ${StyledResource} {
    display: block;
  }

  ${StyledLevel} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }

  ${StyledPlayerName} {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledArrowhead = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -12px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 12px solid currentColor;
    transform: translate(0, -50%);
  }
`;

const Arrowhead = observer((props) => {
  const { selected, unit } = props;
  let { color, rotation } = unit;
  if (rotation === null) {
    return null;
  }
  if (selected) {
    color = 'white';
  }
  // Valve's QAngle orientation is counter-clockwise
  rotation *= -1;
  return (
    <StyledArrowhead
      style={{ color, transform: `rotate(${rotation}deg` }}
    />
  );
});

const Unit = observer((props) => {
  const { selected, setSelection, unit } = props;
  const {
    color, handle, isDead, isIllusion, isPhantom, isWaitingToSpawn, position: { relX, relY },
  } = unit;

  const onClick = useCallback(() => {
    setSelection(handle);
  }, [handle, setSelection]);

  if (isWaitingToSpawn) {
    return null;
  }

  const isHero = unit instanceof Hero;

  // Render heroes, buildings (non-towers), Tormentors and Roshan as large
  const isLarge = (
    isHero
    || (unit instanceof Building && !unit.isTower)
    || unit.refname === 'npc_dota_miniboss'
    || unit.refname === 'npc_dota_roshan'
  );

  return (
    <StyledUnit
      active={!isDead}
      translucentWhenInactive
      color={color}
      onClick={isPhantom ? undefined : onClick}
      isIllusion={isIllusion}
      isLarge={isLarge}
      isPhantom={isPhantom}
      selected={selected}
      style={{
        left: `${relX * 100}%`,
        bottom: `${relY * 100}%`,
      }}
      type={unit.type}
    >
      {!isPhantom && <Arrowhead selected={selected} unit={unit} />}
      <UnitOrHeroResource unit={unit} variant="icon" />
      {isHero && (
        <>
          <Level xp={unit.xp} size="small">{unit.level}</Level>
          {unit.player && <PlayerName player={unit.player} />}
        </>
      )}
    </StyledUnit>
  );
});

export default Unit;
