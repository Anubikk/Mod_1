/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/
function countDownTimer(num) { //create a function that takes in a number argument
  if (num === 0) return "Happy New Year!"; 
  const _count = () => {
    num -= 1;
    if (num <= 0) {
      return "Happy New Year!";
    } else {
      return _count;
    }
  };
  return _count;
}





// const countDownTimer = (n) => {
//     let count = n; //create a variable to store the count
//     return () => { //return a function
//       if (count > 0) { //if the count is greater than 0
//             count--; //decrement the count
//             return countDownTimer(count); //return the function
//         } else { //if the count is 0
//             return "Happy New Year!"; //return the string
//         }
//     };
// }




// function countDownTimer(n) {
//   let count = n; //create a variable to store the count
//   return function() { //return a function
//     count--; //decrement the count
//     if (count === 0) { //if the count is 0
//       return "Happy New Year!"; //return the string
//     } else { //if the count is not 0
//       return countDownTimer(); //return the function
//     }
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
