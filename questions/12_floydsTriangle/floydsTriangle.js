// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let result = [];
    for (let rows = 0; rows <= n; rows++) {
      for (let number = 0; number <= rows; number++) {
        total = total + number;
      }
    }
  }

  return result;
};

module.exports = { floydsTriangle };
