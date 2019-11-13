function cache(func) {
  if (typeof func !== 'function') {
    throw 'Input must be a function.';
  }
  let argPassed = [];
  return function(arg) {
    if (!argPassed.includes(arg)) {
      argPassed.push(arg);
      
    }

    return func(arg);
  };
}

module.exports = { cache };
