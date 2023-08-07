import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { useReplayController } from '../hooks/index.js';

import HUD, {
  MiniMap, Options, Selection, Stats, Timeline, Topbar,
} from './hud/HUD.jsx';
import World from './world/World.jsx';

const StyledReplayView = styled.div`
  width: 100%;
  height: 100%;
`;

const ReplayView = observer(({ replay }) => {
  const {
    camera,
    cameraID,
    isFreeCamera,
    playbackSpeed,
    playing,
    requestTick,
    selectedUnit,
    setCameraID,
    setFreeCamera,
    setPlaybackSpeed,
    setPlaying,
    setSelection,
  } = useReplayController(replay);

  return (
    <StyledReplayView>
      <HUD>
        <MiniMap
          camera={camera}
          isFreeCamera={isFreeCamera}
          patch={replay.patch}
          setFreeCamera={setFreeCamera}
          units={replay.units}
        />
        <Options
          cameraID={cameraID}
          players={replay.players}
          replay={replay}
          setCameraID={setCameraID}
        />
        {selectedUnit && (
          <Selection
            key={selectedUnit.handle}
            selectedUnit={selectedUnit}
            setSelection={setSelection}
          />
        )}
        <Stats
          players={replay.players}
        />
        <Timeline
          playbackSpeed={playbackSpeed}
          playing={playing}
          replay={replay}
          setPlaybackSpeed={setPlaybackSpeed}
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
        patch={replay.patch}
        selectedUnit={selectedUnit}
        setFreeCamera={setFreeCamera}
        setSelection={setSelection}
        units={replay.units}
      />
    </StyledReplayView>
  );
});

export default ReplayView;
