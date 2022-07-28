/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  //create a counter for number of keys containing apples
  let count = 0;

  //set forLoop conditions to iterate through the keys of our object
 for (let key in appleObj){
  //set search specs to set all keys to lower case.
  key = key.toLowerCase();

 }
    //add to count if key contains "apple"
    count ++
  //return count of number of keys that contain "apple"
  }
  return count;
}

let counter = 0;

for (let key in appleObj) {
  key = key.toLowerCase();
  if (key.indexOf("apple") > -1) {
    counter += 1;
  }
}

return counter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
