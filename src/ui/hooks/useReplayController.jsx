import { useCallback, useEffect, useState } from 'react';

import useInterval from './useInterval.jsx';

const useReplayController = (replay) => {
  const [focus, setFocus] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [selectionId, setSelectionId] = useState(null);

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

  const selectedUnit = replay?.units?.find((u) => u.eid === selectionId);

  const requestTick = useCallback((target) => {
    replay.jump(target);
  }, [replay]);

  const setSelection = useCallback((id) => {
    if (id === selectionId) {
      setFocus({ x: selectedUnit.x, y: selectedUnit.y });
    }
    setSelectionId(id);
  }, [selectionId, selectedUnit, setFocus, setSelectionId]);

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
