import React from 'react';
import styled from 'styled-components';

import { HStack } from '../../components/index.js';

const StyledTimeline = styled(HStack)`
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

  & input {
    width: 100%;
  }
`;

const Timeline = (props) => {
  const { tick, maxTick, setTick } = props;
  return (
    <StyledTimeline>
      <input
        type="range"
        min={0}
        max={maxTick}
        step={1}
        value={tick}
        onChange={(e) => setTick(+e.target.value)}
      />
    </StyledTimeline>
  );
};

export default Timeline;
