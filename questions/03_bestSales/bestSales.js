const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let obj = sales.reduce( (obj, product) => {
    obj[product['productId']] ? 
    obj[product['productId']] += product['amount'] : 
    obj[product['productId']] = product['amount'] ;
    return obj;
  },{})
let bestSeller = {};
if(sales.length !== 0){
 obj = Object.entries(obj)
 obj.reduce( (initialVal, currVal) =>{
   if(initialVal[1] < currVal[1]){
     initialVal = currVal;
   }
   bestSeller.id = parseInt(initialVal[0]);
   bestSeller.total = initialVal[1];
   return initialVal;
 })
}

 return bestSeller;
}

console.log(bestSales(sales));

module.exports = { bestSales, sales };