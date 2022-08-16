/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
//first attempt - recursive
const sumArray = (arr) => {
  if (arr.length === 0) { // if the array is empty, return 0 - base case
    return 0;
  }
  if (arr[0] < 0) { // if the first element is negative, add the next element to the sum - recursive call
    return arr[0] + sumArray(arr.slice(1)); // recursive call with the next element in the array removed from the array
  }
  return arr[0] + sumArray(arr.slice(1)); // recursive call with the next element in the array removed from the array
}

//second attempt destructuring - recursive

function sumArray(nums) {
  if(!nums.length) return 0 // if the array is empty, return 0 - base case
  const last = nums.pop() // pop the last element off the array
  const recursive = sumArray(nums) // recursive call with the next element in the array removed from the array
  return last + recursive // return the last element plus the recursive call
}

//third attempt - recursive
function sumArray(nums) {
  if(!nums.length) return 0 // if the array is empty, return 0 - base case
  return num[0] + sumArray(nums.slice(1)) // return the first element plus the recursive call
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
