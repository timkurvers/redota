export const compareByProp = (prop) => (a, b) => a[prop] - b[prop];
export const compareByPropDesc = (prop) => (a, b) => b[prop] - a[prop];

// Composes multiple sort compare functions into one
export const composeComparisons = (...fns) => (a, b) => {
  for (const fn of fns) {
    if (!fn) continue;
    const value = fn(a, b);
    if (value !== 0) {
      return value;
    }
  }
  return 0;
};
