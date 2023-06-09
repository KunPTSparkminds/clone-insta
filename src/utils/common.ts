export const isEmptyObject = (obj: Object): boolean =>
  !obj ||
  (Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype);
