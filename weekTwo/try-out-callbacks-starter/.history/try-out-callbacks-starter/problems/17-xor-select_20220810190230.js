/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

const xorSelect = function(array, cb1, cb2) {
    let newArray = []; // create new array to hold filtered elements
    array.forEach(element => { // loop through array
        if (cb1(element) && !cb2(element)) { // if element passes cb1 and not cb2
            newArray.push(element); // push element into new array
        } else if (!cb1(element) && cb2(element)) { // if element passes cb2 and not cb1
            newArray.push(element); // push element into new array
        }
    });
    return newArray;
}







/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
