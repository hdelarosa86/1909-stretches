// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const num = '0123456789'.split('');
  return [...str].map( (letter,idx) => {
    let arrtoUse = (typeof Number(letter) === 'number') ? alpha : num;
    let shiftedIdx;
    if(typeof letter !== number){
      if(letter === letter.toUpperCase()){
        shiftedIdx = arrtoUse.indexOf(letter.toLowerCase()) + shift;
      }

    }
    
  }).join('')
};

// let shiftedIdx = arrtoUse.indexOf(letter.toLowerCase()) + shift;
//     if(letter === letter.toUpperCase()){
//       let shiftedIdx = arrtoUse.indexOf(letter.toLowerCase()) + shift;
//       return arrtoUse[shiftedIdx].toUpperCase();
//     }
    
//     return alpha[shiftedIdx];

module.exports = { encryptString };
