import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Button, HStack, StyledButton, Time,
} from '../../../components/index.js';

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

  > * {
    margin: auto 5px;
  }

  input {
    width: 100%;
  }

  ${StyledButton} {
    width: 50px;
  }
`;

const Timeline = observer((props) => {
  const {
    playing, replay: { lastTick, tick }, requestTick, setPlaying,
  } = props;

  const onTogglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const onSliderChange = useCallback((e) => {
    requestTick(+e.target.value);
  }, [requestTick]);

  return (
    <StyledTimeline>
      <Button onClick={onTogglePlaying}>
        {!playing ? '►' : '❚❚'}
      </Button>
      <input
        type="range"
        min={0}
        max={lastTick}
        step={1}
        value={tick}
        onChange={onSliderChange}
      />
      <div style={{ whiteSpace: 'nowrap' }}>
        <Time time={tick / 30} /> / <Time time={lastTick / 30} />
      </div>
    </StyledTimeline>
  );
});

export default Timeline;
