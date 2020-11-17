const { hasOwnProperty } = {};

export default (obj, prop) => (
  hasOwnProperty.call(obj, prop) ? obj[prop] : null
);
