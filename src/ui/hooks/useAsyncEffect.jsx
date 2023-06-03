import { useState } from 'react';
import useOriginalAsyncEffect from 'use-async-effect';

// Error-boundary compatible variant of useAsyncEffect
const useAsyncEffect = (operation, ...rest) => {
  const [error, setError] = useState(null);
  if (error) {
    throw error;
  }

  const safeOperation = async () => {
    try {
      await operation();
    } catch (e) {
      setError(e);
    }
  };

  return useOriginalAsyncEffect(safeOperation, ...rest);
};

export default useAsyncEffect;
