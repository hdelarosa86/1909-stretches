function cache(func) {
  if (typeof func !== 'function') {
    throw 'Input must be a function.';
  }
  let argPassed = {};
  return function(...arg) {
    if (argPassed[arg]) {
      return argPassed[arg];
    } else {
      argPassed[arg] = func(...arg);
      return argPassed[arg];
    }
  };
}

module.exports = { cache };
