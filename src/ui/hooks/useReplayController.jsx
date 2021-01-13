import { useCallback, useEffect, useState } from 'react';

import { GAME_PHASE } from '../../lib/constants.js';

import useInterval from './useInterval.jsx';

const useReplayController = (replay) => {
  const [freeCamera, setFreeCamera] = useState({
    x: 0, y: 0, width: 0, height: 0,
  });
  const [cameraID, setCameraID] = useState('free');
  const [playing, setPlaying] = useState(false);
  const [selectionID, setSelectionID] = useState(null);

  // TODO: Player perspective camera support
  const camera = freeCamera;

  // TODO: Replay clean-up on component unmount
  useEffect(() => {
    replay.on('warn', console.warn);
    replay.start();
    replay.jumpTo(GAME_PHASE.PREGAME);
  }, [replay]);

  // Replay files seem to (mostly) hop over every other tick, so decrease the
  // tick rate by a factor two
  useInterval(() => {
    replay.step(2);
  }, replay && playing ? (1 / replay.tickInterval) * 2 : null);

  const selectedUnit = replay?.units?.find((u) => u.handle === selectionID);

  const requestTick = useCallback((target) => {
    replay.jump(target);
  }, [replay]);

  const setSelection = useCallback((id) => {
    if (id === selectionID && cameraID === 'free') {
      setFreeCamera((current) => ({
        ...current,
        x: selectedUnit.relX,
        y: selectedUnit.relY,
      }));
    }
    setSelectionID(id);
  }, [cameraID, selectionID, selectedUnit, setFreeCamera, setSelectionID]);

  return {
    camera,
    cameraID,
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
