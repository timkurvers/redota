import { useCallback, useEffect, useState } from 'react';

import { GAME_PHASE } from '../../lib/constants.js';

import useInterval from './useInterval.jsx';

const useReplayController = (replay) => {
  const [freeCamera, setFreeCamera] = useState({
    relX: 0, relY: 0, width: 0, height: 0,
  });
  const [cameraID, setCameraID] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectionID, setSelectionID] = useState(null);

  const isFreeCamera = cameraID === -1;
  const camera = isFreeCamera ? freeCamera : replay?.players.get(cameraID)?.camera;

  // TODO: Replay clean-up on component unmount
  useEffect(() => {
    replay.on('warn', console.warn); // eslint-disable-line no-console
    replay.start();

    // Jump to the pre-game (skipping any draft) and a few ticks more to ensure
    // heroes are assigned to all players
    replay.jumpTo(GAME_PHASE.PRE_GAME);
    replay.seek(replay.tick + replay.ticksPerSecond);
  }, [replay]);

  // Replay files seem to (mostly) hop over every other tick, so decrease the
  // tick rate by a factor two
  useInterval(() => {
    replay.step(2);
  }, replay && playing ? replay.ticksPerSecond * 2 * (1 / playbackSpeed) : null);

  const selectedUnit = replay?.units.find((u) => u.handle === selectionID);

  const requestTick = useCallback((target) => {
    // TODO: Remove this optimization once `jump` is optimized and not broken
    const diff = target - replay.tick;
    if (diff < 1000) {
      replay.seek(target);
    } else {
      replay.jump(target);
    }
  }, [replay]);

  const setSelection = useCallback((id) => {
    if (id === selectionID && isFreeCamera) {
      setFreeCamera((current) => ({
        ...current,
        relX: selectedUnit.position.relX,
        relY: selectedUnit.position.relY,
      }));
    }
    setSelectionID(id);
  }, [isFreeCamera, selectionID, selectedUnit, setFreeCamera, setSelectionID]);

  return {
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
  };
};

export default useReplayController;
