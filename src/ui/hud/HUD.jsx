import React from 'react';

import Selection from './selection/Selection.jsx';
import Timeline from './timeline/Timeline.jsx';
import Topbar from './topbar/Topbar.jsx';

const HUD = (props) => {
  const {
    heroes,
    selectedEntity, setSelection,
    playing, setPlaying,
    tick, maxTick, time, requestTick,
  } = props;

  return (
    <div>
      {selectedEntity && (
        <Selection selectedEntity={selectedEntity} setSelection={setSelection} />
      )}
      <Timeline
        playing={playing}
        setPlaying={setPlaying}
        tick={tick}
        maxTick={maxTick}
        requestTick={requestTick}
      />
      <Topbar heroes={heroes} setSelection={setSelection} time={time} />
    </div>
  );
};

export default HUD;
