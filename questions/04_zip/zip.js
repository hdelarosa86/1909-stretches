/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  return objs.reduce( (obj,currVal) => {
    for(let k in currVal){
      if(obj[k]){
        obj[k] += currVal[k];
      } else {
        obj[k] = currVal[k];
      }
    }
    return obj;
  }, {});
}
console.log(zip([{x: 1}, {x: 2}]));
module.exports = { zip };
