function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
<<<<<<< HEAD
  const obj1ValueArr = Object.values(obj1);
  const obj2ValueArr = Object.values(obj2);
  const obj1KeysArr = Object.keys(obj1);
  const obj2KeysArr = Object.keys(obj2);

  if(obj1ValueArr.length === obj2ValueArr.length && obj1KeysArr.length === obj2KeysArr.length ) {
    return obj1ValueArr.join('') === obj2ValueArr.join('') && obj1KeysArr.join('') === obj2KeysArr.join('')
  } else{
    return false;
  }
=======
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
}

module.exports = { isEqual };
