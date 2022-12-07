export const debounce = (fun, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fun.apply(this, args);
    }, ms);
  };
};
