import React from 'react';

const Clock = (props) => {
  let { time } = props;
  const mins = time / 60 | 0;
  time %= 60;
  const secs = time | 0;
  return (
    <div>
      {`00${mins}`.slice(-2)}
      :
      {`00${secs}`.slice(-2)}
    </div>
  );
};

export default Clock;
