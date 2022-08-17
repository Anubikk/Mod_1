/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

const addToTwelve = (arr) => {
  if (arr.length <=) { // if the array is empty or has one element, return false - edge case
    return false;
  }
  if (arr[0] + arr[1] === 12) { // if the first element plus the second element equals 12, return true - base case
    return true;
  }
  return addToTwelve(arr.slice(1)); // recursive call with the next element in the array removed from the array - recursive call
}

//second attempt one-liner - recursive
// const addToTwelve = (arr) => arr.length <= 1 ? false : arr[0] + arr[1] === 12 ? true : addToTwelve(arr.slice(1));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
