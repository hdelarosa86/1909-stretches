function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  const obj1ValueArr = Object.values(obj1);
  const obj2ValueArr = Object.values(obj2);
  const obj1KeysArr = Object.keys(obj1);
  const obj2KeysArr = Object.keys(obj2);

  if(obj1ValueArr.length === obj2ValueArr.length && obj1KeysArr.length === obj2KeysArr.length ) {
    return obj1ValueArr.join('') === obj2ValueArr.join('') && obj1KeysArr.join('') === obj2KeysArr.join('')
  } else{
    return false;
  }
}

module.exports = { isEqual };
