import React from 'react';

export { default as Selection } from './selection/Selection.jsx';
export { default as Timeline } from './timeline/Timeline.jsx';
export { default as Topbar } from './topbar/Topbar.jsx';

const HUD = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

export default HUD;
