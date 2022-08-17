/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
//first attempt - recursive
const sumToN = (num) => {
  if (num < 0) { // if num is less than 0, return null - edge case
    return null;
  }
  if (num === 0) { // if num is 0, return 0 (base case)
    return 0;
  }
  return num + sumToN(num - 1); // recursive case - add num to the sum of the numbers from 0 to num - 1 and call sumToN with num - 1
}


// //second destructive attempt - recursive
// const sumToN = (num) => {
//   if (num < 0) { // if num is less than 0, return null - edge case
//     return null;
//   }
//   const recursive = sumToN(num -1); // recursive call with num - 1
//   const result = num + recursive; // add num to the sum of the numbers from 0 to num - 1 and call sumToN with num - 1
//   return result;
// }

// //low call stack attempt - recursive
// const sumToN = (num) => {
//   if (num < 0) return null; // if num is less than 0, return null - edge case
//   if (num ===0 || num === 1) return num // if num is 0 or 1, return num (base case)
//     let recursive = sumToN(num - 1); // recursive call with num - 1
//     let result = num + recursive; // add num to the sum of the numbers from 0 to num - 1 and call sumToN with num - 1
//     return result;
//   }

//third attempt one line - recursive
const sumToN = (num) => num < 0 ? null : num === 0 || num === 1 ? num : sumToN(num - 1) + num;


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
