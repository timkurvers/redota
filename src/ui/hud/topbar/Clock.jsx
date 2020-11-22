import React from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
  min-width: 70px;
  text-align: center;
`;

const Clock = (props) => {
  let { time } = props;
  const sign = time < 0 ? '-' : '';
  time = Math.abs(time);
  const mins = time / 60 | 0;
  time %= 60;
  const secs = time | 0;
  return (
    <StyledClock>
      {sign}
      {`00${mins}`.slice(-2)}
      :
      {`00${secs}`.slice(-2)}
      {sign ? ' ' : ''}
    </StyledClock>
  );
};

export default Clock;
