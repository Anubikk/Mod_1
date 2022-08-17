/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

const  range = (start, end) => {
  if (start === end) { // if start is equal to end, return an empty array - base case
    return [];
  }
  if (start > end) { // if start is greater than end, return an empty array - edge case
    return [];
  }
  return [start].concat(range(start + 1, end)); // recursive case - add start to the end of the array and call range with start + 1 and end
}

//second attempt one line - recursive



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
