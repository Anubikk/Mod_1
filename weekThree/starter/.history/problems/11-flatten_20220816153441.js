/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
//first 
const flatten = (arr) => {
  if (arr.length === 0) { // if the array is empty, return an empty array - edge case
    return [];
  }
  if (Array.isArray(arr[0])) { // if the first element is an array, call flatten on the first element and concatenate it with the rest of the array - base case
    return flatten(arr[0]).concat(flatten(arr.slice(1))); // recursive call with the first element removed from the array
  }
  return [arr[0]].concat(flatten(arr.slice(1))); // recursive call with the first element removed from the array
}

//second attempt one-liner - recursive
const flatten = (arr) => arr.length === 0 ? [] : Array.isArray(arr[0]) ? flatten(arr[0]).concat(flatten(arr.slice(1))) : [arr[0]].concat(flatten(arr.slice(1)));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
