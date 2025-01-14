const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

// function query(arr, objToFilter) {
//   let objToFilterArr = Object.entries(objToFilter);
//   return arr.filter( obj => {
//     return objToFilterArr.every( (ele) =>{
//       const [key,value] = ele;
//       console.log(key,value);
//       return obj[key] === value;
//     })
//   })
// }

// function query(arr, obj) {
//   const objEntries = Object.entries(obj);
//   return arr.filter(eachObj => {
//     return objEntries.every(eachCompArr => {
//       const key = eachCompArr[0];
//       const value = eachCompArr[1];
//      return eachObj[key] === value;
//       })
//     })
//   }
  function query(arr, obj) {
    const objEntries = Object.entries(obj);
    return arr.filter(eachObj => {
      return objEntries.every(eachCompArr => {
        const key = eachCompArr[0];
        const value = eachCompArr[1];
        return eachObj[key] === value;
      });
    });
   }


//query(items, { price: 4, name: 'bazz'});
module.exports = { query, items };
