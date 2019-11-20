/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, order, key) {
  //    let sortedData = data.map( item => {
  //         return item[order];
  //     });
  //    sortedData.sort((a,b) => a-b)
  //    return data.map( item => {
  //        for(let i = 0; i < sortedData.length; i++){
  //            if(sortedData[i] === item[order]){
  //                return data[key];
  //            }
  //        }
  //    })

  return data
    .sort((a, b) => {
      if (a[order] < b[order]) {
        return -1;
      }
      if (a[order] > b[order]) {
        return 1;
      }
      return 0;
    })
    .map(ele => {
      return ele[key];
    });
}

module.exports = { sortOrder };
