/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  let keyFound = false;// sets a default value of false to toggle inplace of .forEach.

  // you can't explicitly return from within a `forEach` function so
  // the way we can get around that is by setting a variable for our boolean
  // and flipping it within our case statement
  objArray.forEach(function(obj) {
    if (obj[keyString] !== undefined) { //conditional to check if keyString is found in obj.
      keyFound = true; //returns toggled value of declared keyFound if keyString if found within obj
    }
  });

  return keyFound;// returns boolean if input of keyString is found within

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
