function times(n) {
  if (typeof n !== 'number') {
    return 'Numbers only!';
  }
  return function(a) {
    if (typeof a !== 'number') {
      return 'Numbers only!';
    }
    return a * n;
  };
}

//cant remember how to throw an exception;

module.exports = { times };
