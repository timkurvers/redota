import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Link } from '../components/index.js';
import { useReplayController } from '../hooks/index.js';

import HUD, {
  Selection, Timeline, Topbar,
} from './hud/HUD.jsx';
import World from './world/World.jsx';

const StyledQuitLink = styled(Link)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`;

const StyledReplayView = styled.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
`;

const ReplayView = observer(({ replay }) => {
  const {
    camera,
    playing,
    requestTick,
    selectedUnit,
    setFreeCamera,
    setPlaying,
    setSelection,
  } = useReplayController(replay);

  return (
    <StyledReplayView>
      <StyledQuitLink to="/">Back to ReDota</StyledQuitLink>
      <HUD>
        {selectedUnit && (
          <Selection
            key={selectedUnit.handle}
            selectedUnit={selectedUnit}
            setSelection={setSelection}
          />
        )}
        <Timeline
          playing={playing}
          setPlaying={setPlaying}
          tick={replay.tick}
          lastTick={replay.lastTick}
          requestTick={requestTick}
        />
        <Topbar
          teams={replay.teams}
          setSelection={setSelection}
          time={replay.time}
        />
      </HUD>
      <World
        camera={camera}
        selectedUnit={selectedUnit}
        setFreeCamera={setFreeCamera}
        setSelection={setSelection}
        units={replay.units}
      />
    </StyledReplayView>
  );
});

export default ReplayView;
