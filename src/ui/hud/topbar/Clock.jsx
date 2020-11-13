import React from 'react';

const Clock = (props) => {
  let { tick } = props;
  const mins = tick / 60 | 0;
  tick %= 60;
  const secs = tick;
  return (
    <div>
      {`00${mins}`.slice(-2)}
      :
      {`00${secs}`.slice(-2)}
    </div>
  );
};

export default Clock;
