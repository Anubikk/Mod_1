/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/
function recVolume(height) {
  let dimensions = [height]; //create a variable to store the dimensions
  const _measure = (num) => { //create a function that returns a function
    if (dimensions.length < 3) { //if the length of the array is less than 3
      dimensions.push(num); //add the number to the array
    }
    if (dimensions.length === 3) { //if the length of the array is 3
      let sum = dimensions.reduce((acc, el) => (acc *= el)); //create a variable to store the sum
      return sum; //return the sum
    } else { //if the length of the array is not 3
      return _measure; //return the function
    }
  };
  return _measure;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
