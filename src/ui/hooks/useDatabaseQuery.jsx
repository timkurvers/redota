import { useLiveQuery } from 'dexie-react-hooks';

const sentinel = Symbol('awaiting db result');

const useDatabaseQuery = (operation, deps = []) => {
  const result = useLiveQuery(operation, deps, sentinel);
  const isLoading = result === sentinel;
  return [isLoading ? null : result, isLoading];
};

export default useDatabaseQuery;
