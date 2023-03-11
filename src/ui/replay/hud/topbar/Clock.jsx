import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Icon, StyledTime, Time } from '../../../components/index.js';

const StyledDayIcon = styled(Icon).attrs(() => ({ name: 'sun', title: 'Day' }))`
  color: #FFCC00;
  font-size: 1.25em;
`;

const StyledNightIcon = styled(Icon).attrs(() => ({ name: 'moon', title: 'Night' }))`
  color: #00CCFF;
  font-size: 1.25em;
`;

const StyledPauseIcon = styled(Icon).attrs(() => ({ name: 'pause-circle', title: 'Paused' }))``;

const StyledClock = styled.div`
  position: relative;
  min-width: 92px;
  margin-bottom: -10px;

  svg {
    display: block;

    path {
      fill: #111;
    }
  }

  ${StyledTime} {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  ${StyledDayIcon}, ${StyledNightIcon}, ${StyledPauseIcon} {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 1.25em;
  }
`;

const Clock = observer((props) => {
  const { game } = props;
  const {
    clockTime, isDay, isNight, isPaused,
  } = game;

  return (
    <StyledClock>
      <svg width="92px" height="58px" viewBox="0 0 92 58">
        <path d="M91.3636488,0 L78.8648919,49.483871 C77.7664824,54.1871992 77.7664824,58 71.3699917,58 L20.3175243,58 C13.9210336,58 13.9210336,54.1871992 12.8226241,49.483871 L0.323867269,0 C0.323867269,0 91.3636488,0 91.3636488,0 Z" />
      </svg>
      {isPaused && <StyledPauseIcon />}
      {!isPaused && isDay && <StyledDayIcon />}
      {!isPaused && isNight && <StyledNightIcon />}
      <Time time={clockTime} />
    </StyledClock>
  );
});

export default Clock;
