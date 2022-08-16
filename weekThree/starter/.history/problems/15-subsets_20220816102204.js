/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  if (arr.length === 0) { // base case - if the array is empty, return an empty array
    return [[]];
  }
  if (arr.length === 1) { // if the array has one element, return an array with an empty array and the element
    return [[], [arr[0]]]; // recursive call with the first element removed from the array
  }
  let first = arr[0]; // get the first element
  let rest = subsets(arr.slice(1)); // get the rest of the array
  let withFirst = rest.map((subset) => { // for each subset, concatenate the first element to the subset
    return subset.concat(first); // recursive call with the first element removed from the array
  }).concat(rest);
  return withFirst;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
