import { useEffect } from 'react';

const isDebug = process.env.NODE_ENV === 'development' || new URLSearchParams(window.location.search).has('debug');

const useDebugging = (replay, selectedUnit) => {
  useEffect(() => {
    if (!isDebug) return;

    window.redota = { replay, selectedUnit };
  }, [replay, selectedUnit]);
};

export default useDebugging;
