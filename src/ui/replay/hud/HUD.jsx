import React from 'react';

export { default as MiniMap } from './minimap/MiniMap.jsx';
export { default as Options } from './options/Options.jsx';
export { default as Selection } from './selection/Selection.jsx';
export { default as Stats } from './stats/Stats.jsx';
export { default as Timeline } from './timeline/Timeline.jsx';
export { default as Topbar } from './topbar/Topbar.jsx';

// Exists solely to clearly indicate HUD components in ReplayView
const HUD = (props) => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
};

export default HUD;
