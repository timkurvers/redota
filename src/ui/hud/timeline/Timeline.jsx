import React from 'react';
import styled from 'styled-components';

import {
  Button, HStack, StyledButton, Time,
} from '../../components/index.js';

const StyledTimeline = styled(HStack)`
  display: flex;
  align-items: center;
  width: 500px;
  padding: 7px 7px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  border-radius: 100px;
  text-align: center;

  & > * {
    margin: auto 5px;
  }

  & input {
    width: 100%;
  }

  ${StyledButton} {
    width: 50px;
  }
`;

const Timeline = (props) => {
  const {
    tick, maxTick, requestTick, playing, setPlaying,
  } = props;
  return (
    <StyledTimeline>
      <Button onClick={() => setPlaying(!playing)}>
        {!playing ? '►' : '❚❚'}
      </Button>
      <input
        type="range"
        min={0}
        max={maxTick}
        step={1}
        value={tick}
        onChange={(e) => requestTick(+e.target.value)}
      />
      <div style={{ whiteSpace: 'nowrap' }}>
        <Time time={tick / 30} /> / <Time time={maxTick / 30} />
      </div>
    </StyledTimeline>
  );
};

export default Timeline;
