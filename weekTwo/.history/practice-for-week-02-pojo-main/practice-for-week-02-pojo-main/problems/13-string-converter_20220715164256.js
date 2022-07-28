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
  let stringObject = {}; //create an empty object to store the character and their count
  for (let i = 0; i < string.length; i++) { //loop through the string
    let currentLetter = string[i]; //create a variable to store the current letter
    if (stringObject[currentLetter] === undefined) { //if the current letter is not in the object
      stringObject[currentLetter] = 1; //add the current letter to the object and set the count to 1
    } else {
      stringObject[currentLetter] += 1;
    }
  }
  return stringObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
