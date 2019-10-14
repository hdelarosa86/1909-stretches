// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = str1.split('').reduce((obj, currVal) => {
    if (obj[currVal]) {
      obj[currVal]++;
    } else {
      obj[currVal] = 1;
    }
    return obj;
  }, {});

  let obj2 = str2.split('').reduce((obj, currVal) => {
    if (obj[currVal]) {
      obj[currVal]++;
    } else {
      obj[currVal] = 1;
    }
    return obj;
  }, {});

  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = { checkAnagrams };
