/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  let arrayObject = {}; //create an empty object to store the character and their count
  for (let i = 0; i < array.length; i++) { //loop through the array
    let currentValue = array[i]; //create a variable to store the current value
    if (arrayObject[currentValue] === undefined) { //if the current value is not in the object
      arrayObject[currentValue] = 1; //add the current value to the object and set the count to 1
    } else { //if the current value is already in the object
      arrayObject[currentValue] += 1; //increment the count of the current value
    }
  }
  return arrayObject; //return the object
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
