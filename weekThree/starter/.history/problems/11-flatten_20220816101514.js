/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const flatten = (arr) => {
  if (arr.length === 0) { // base case - if the array is empty, return an empty array
    return [];
  }
  if (Array.isArray(arr[0])) { // if the first element is an array, call flatten on the first element and concatenate it with the rest of the array
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  return [arr[0]].concat(flatten(arr.slice(1)));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
