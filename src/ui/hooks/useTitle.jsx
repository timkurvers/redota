import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultTitle = document.title;

const useTitle = (page = null) => {
  const location = useLocation();
  useEffect(() => {
    document.title = page ? `${page} | ReDota` : defaultTitle;
  }, [location, page]);
};

const useDefaultTitle = useTitle;

export default useTitle;
export { useDefaultTitle };
