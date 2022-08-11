/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

let myEvery = function(array, cb) {
    //return a boolean that is true if all ele are true if passed through the callback args
    for (let i = 0; i < array.length; i++) { //loop through the array
            let ele = array[i]; //set the current element to ele
            if (cb(ele)===false) { //if the callback returns false
                return false; //return false
            }
    }
    return true; //if all elements return true, return true
   
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
