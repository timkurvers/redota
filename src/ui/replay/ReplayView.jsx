import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Link } from '../components/index.js';
import { useReplayController } from '../hooks/index.js';

import HUD, {
  MiniMap, Options, Selection, Timeline, Topbar,
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
    cameraID,
    isFreeCamera,
    playing,
    requestTick,
    selectedUnit,
    setCameraID,
    setFreeCamera,
    setPlaying,
    setSelection,
  } = useReplayController(replay);

  return (
    <StyledReplayView>
      <StyledQuitLink to="/">Back to ReDota</StyledQuitLink>
      <HUD>
        <MiniMap
          camera={camera}
          isFreeCamera={isFreeCamera}
          setFreeCamera={setFreeCamera}
          units={replay.units}
        />
        <Options
          cameraID={cameraID}
          players={replay.players}
          setCameraID={setCameraID}
        />
        {selectedUnit && (
          <Selection
            key={selectedUnit.handle}
            selectedUnit={selectedUnit}
            setSelection={setSelection}
          />
        )}
        <Timeline
          playing={playing}
          replay={replay}
          setPlaying={setPlaying}
          requestTick={requestTick}
        />
        <Topbar
          game={replay.game}
          teams={replay.teams}
          setSelection={setSelection}
        />
      </HUD>
      <World
        camera={camera}
        isFreeCamera={isFreeCamera}
        selectedUnit={selectedUnit}
        setFreeCamera={setFreeCamera}
        setSelection={setSelection}
        units={replay.units}
      />
    </StyledReplayView>
  );
});

export default ReplayView;
