import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
  Button, Dropdown, HStack, Icon, StyledButton, Time,
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
    playbackSpeed, playing,
    replay: { lastTick, tick, ticksPerSecond },
    requestTick, setPlaying, setPlaybackSpeed,
  } = props;

  const onPlaybackSpeedChange = useCallback((e) => {
    setPlaybackSpeed(+e.target.value);
  }, [setPlaybackSpeed]);

  const onTogglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const onSliderChange = useCallback((e) => {
    requestTick(+e.target.value);
  }, [requestTick]);

  const onStepForward = useCallback(() => {
    requestTick(tick + 10 * ticksPerSecond);
  }, [requestTick, tick, ticksPerSecond]);

  return (
    <StyledTimeline>
      <Button disabled label="Jump backwards 10s (not yet supported)">
        <Icon name="step-backward" />
      </Button>
      <Button onClick={onTogglePlaying}>
        <Icon name={playing ? 'pause' : 'play'} />
      </Button>
      <Button onClick={onStepForward} label="Jump forwards 10s">
        <Icon name="step-forward" />
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
      <Dropdown onChange={onPlaybackSpeedChange} value={playbackSpeed}>
        <option value="0.25">0.25x</option>
        <option value="0.5">0.5x</option>
        <option value="1">1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
        <option value="4">4x</option>
      </Dropdown>
    </StyledTimeline>
  );
});

export default Timeline;
