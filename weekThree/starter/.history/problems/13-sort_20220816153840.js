/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

const sort = (nums, sorted = []) => {
  if (nums.length === 0) { // base case - if the array is empty, return an empty array
    return sorted;
  }
  let smallest = nums.reduce((acc, curr) => { // find the smallest element in the array
    if (curr < acc) {
      return curr;
    }
    return acc;
  }),
  index = nums.indexOf(smallest); // find the index of the smallest element in the array
  sorted.push(smallest); // add the smallest element to the end of the sorted array
  nums.splice(index, 1); // remove the smallest element from the array
  return sort(nums, sorted); // recursive call with the smallest element removed from the array
}

//second attempt one-liner - recursive
const sort = (nums, sorted = []) => nums.length === 0 ? sorted : 
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
