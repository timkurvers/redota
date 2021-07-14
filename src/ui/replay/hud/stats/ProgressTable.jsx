import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { TEAM_COLORS } from '../../../../lib/constants.js';

import PlayerEntry from './PlayerEntry.jsx';

const StyledProgress = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  height: 11px;
  transform: translate(0, -50%);
  mask-image: linear-gradient(to right, transparent 0%, #000F 50%);
`;

const StyledBar = styled.div`
  position: relative;
  border: 1px solid #0007;
  border-style: solid none solid none;
  height: 3px;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 9px;
    height: 9px;
    border: 1px solid #0009;
    border-radius: 50%;
    background-color: inherit;
    background-image: radial-gradient(#FFF5, #0000);
    transform: translate(0%, -50%);
  }
`;

const StyledLabel = styled.div`
  position: relative;
  z-index: 2;
`;

const ProgressTable = observer((props) => {
  const { definition, players } = props;

  const values = players.map((player) => definition.value(player));
  const max = Math.max(...values) || 1;

  return players.map((player, index) => {
    const color = TEAM_COLORS[player.teamID];
    const pct = (values[index] / max) * 100 | 0;
    return (
      <PlayerEntry key={player.id} player={player}>
        <StyledProgress>
          <StyledBar style={{ background: color, width: `${pct}%` }} />
        </StyledProgress>
        <StyledLabel>{values[index]}</StyledLabel>
      </PlayerEntry>
    );
  });
});

export default ProgressTable;
