function memoCallback() {
  let prevArgs = [null];

  return function (callback, args) {
    for (let i = 0; i < args.length; i++) {
      if (prevArgs[i] !== args[i]) {
        if (prevArgs[0] === null) {
          // memoize
          prevArgs = args;
          return;
        }
        // memoize
        prevArgs = args;
        callback();
        return;
      }
    }
  };
}

export { memoCallback };
