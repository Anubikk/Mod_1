/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

function breakDownObj(obj) {
  let keys = Object.keys(obj); //set the var of keys to include the total keys of the obj
  let values = Object.values(obj);//set the var of values to include the total values of the obj

  return [...keys, ...values]; //return our objects key value pairs 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
