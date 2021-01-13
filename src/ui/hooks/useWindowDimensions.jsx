import { useState, useEffect } from 'react';

// See: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions]);

  return [windowDimensions];
};

export default useWindowDimensions;
