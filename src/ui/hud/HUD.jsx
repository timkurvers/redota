import React from 'react';

import Selection from './selection/Selection.jsx';
import Timeline from './timeline/Timeline.jsx';
import Topbar from './topbar/Topbar.jsx';

const HUD = (props) => {
  const {
    entities, selectedEntity, setSelection, tick, maxTick, setTick,
  } = props;

  // TODO: Actually find heroes properly
  const heroes = entities.filter(Boolean);

  return (
    <div>
      {selectedEntity && (
        <Selection selectedEntity={selectedEntity} setSelection={setSelection} />
      )}
      <Timeline tick={tick} maxTick={maxTick} setTick={setTick} />
      <Topbar heroes={heroes} setSelection={setSelection} tick={tick} />
    </div>
  );
};

export default HUD;
