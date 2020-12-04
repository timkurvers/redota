import { useCallback, useEffect, useState } from 'react';

import useInterval from './useInterval.jsx';

const useReplayController = (replay) => {
  const [focus, setFocus] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [selectionID, setSelectionID] = useState(null);

  // TODO: Replay clean-up on component unmount
  useEffect(() => {
    replay.on('warn', console.warn);
    replay.start();
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
    if (id === selectionID) {
      setFocus({ x: selectedUnit.x, y: selectedUnit.y });
    }
    setSelectionID(id);
  }, [selectionID, selectedUnit, setFocus, setSelectionID]);

  return {
    focus,
    playing,
    requestTick,
    selectedUnit,
    setPlaying,
    setSelection,
  };
};

export default useReplayController;
