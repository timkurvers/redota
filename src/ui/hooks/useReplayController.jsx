import { useCallback, useEffect, useState } from 'react';

import { GAME_PHASE } from '../../lib/constants.js';

import useInterval from './useInterval.jsx';

const useReplayController = (replay) => {
  const [freeCamera, setFreeCamera] = useState({
    relX: 0, relY: 0, width: 0, height: 0,
  });
  const [cameraID, setCameraID] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [selectionID, setSelectionID] = useState(null);

  const isFreeCamera = cameraID === -1;
  const camera = isFreeCamera ? freeCamera : replay?.players.get(cameraID)?.camera;

  // TODO: Replay clean-up on component unmount
  useEffect(() => {
    replay.on('warn', console.warn);
    replay.start();
    replay.jumpTo(GAME_PHASE.PRE_GAME);
  }, [replay]);

  // Replay files seem to (mostly) hop over every other tick, so decrease the
  // tick rate by a factor two
  useInterval(() => {
    replay.step(2);
  }, replay && playing ? (1 / replay.tickInterval) * 2 : null);

  const selectedUnit = replay?.units.find((u) => u.handle === selectionID);

  const requestTick = useCallback((target) => {
    replay.jump(target);
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
    playing,
    requestTick,
    selectedUnit,
    setCameraID,
    setFreeCamera,
    setPlaying,
    setSelection,
  };
};

export default useReplayController;
