// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  let str = '';
  if (n !== '') {
    let total = 0;
    for (let rows = 0; rows <= n; rows++) {
      for (let number = 1; number < rows; number++) {
        total = total + number;
      }
      str += total.toString();
    }
  }

  return str;
};

module.exports = { floydsTriangle };
