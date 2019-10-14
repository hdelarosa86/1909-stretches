// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let obj1 = Object.entries(str1.split('').reduce( (obj, currVal) => {
    if(obj[currVal]){
      obj[currVal]++;
    } else{
      obj[currVal] = 1;
    }
    return obj;
  }, {}))

  let obj2 = Object.entries(str2.split('').reduce( (obj, currVal) => {
    if(obj[currVal]){
      obj[currVal]++;
    } else{
      obj[currVal] = 1;
    }
    return obj;
  }, {}))
  
  return obj1.forEach( currVal => {
    if (obj2.includes(currVal)){
      return true;
    } else{
      return false;
    }
  });

};



module.exports = { checkAnagrams };
