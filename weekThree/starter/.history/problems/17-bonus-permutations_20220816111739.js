/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  if (array.length === 0) { // base case
    return [[]]; // if the array is empty, return an empty array
  }
  if (array.length === 1) { // base case
    return [[array[0]]]; // if the array has one element, return an array with an empty array and the element
  }
  let first = array[0]; // get the first element
  let rest = permutations(array.slice(1)); // get the rest of the array
  let withFirst = rest.map((subset) => { // for each subset, concatenate the first element to the subset
    return subset.concat(first); // recursive call with the first element removed from the array
    

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
