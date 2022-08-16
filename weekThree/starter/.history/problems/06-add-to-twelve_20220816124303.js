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
  if (arr.length === 0) { // edge - if the array is empty, return false
    return false;
  }
  if (arr.length === 1) { // base case - if the array is empty, return false
    return false;
  }
  if (arr[0] + arr[1] === 12) { // if the first element plus the second element equals 12, return true
    return true;
  }
  return addToTwelve(arr.slice(1)); // recursive call with the next element in the array removed from the array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
