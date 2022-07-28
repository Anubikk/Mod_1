/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let stringObject = {};
  // iterate through the str with a forLoop
  for (let i = 0; i < string.length; i++) {
    //set a default value to compare str indexes to.
    let currentLetter = string[i];
    // if the value doesn't exist in the object then add to obj and give it a count
    if (stringObject[currentLetter] === undefined) {
      stringObject[currentLetter] = 1;
    } else {
      // otherwise we increment the count of the value in the object
      stringObject[currentLetter] += 1;
    }
  }
  //return the object with count values of array keys
  return StringObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
