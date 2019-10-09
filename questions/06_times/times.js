function times(n) {
  if (typeof n !== 'number') {
    throw 'Numbers only!';
  }
  return function(a) {
    if (typeof a !== 'number') {
      throw 'Numbers only!';
    }
    return a * n;
  };
}

//cant remember how to throw an exception;

module.exports = { times };
