/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
function isSorted(arr){
//if array is empty return empty arr
  if(arr.length === 0){
    return true;
//if arr is 1 ele long return true
  }else if(arr.length === 1){
    return true;
//if arr[0] is gretaer than arr[1] return false
  }else if(arr[0] > arr[1]){
    return false;
//if arr[0] is less than arr[1] return .isSorted(arr.slice(1))
  }else{
    return isSorted(arr.slice(1));
  }
}







/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
