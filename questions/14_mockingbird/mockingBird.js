const repeater = (func, n) => {
  let arr = [];
  if(func){
  for(let i = 0; i < n; i++){
    arr.push(func());
  }
}
console.log(arr.length);
  return arr;
  // repeater runs a function n times and returns an array of its outputs
};

module.exports = { repeater };
