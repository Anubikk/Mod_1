/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  return function (sentence) { //return a function that takes in a string
    let words = sentence.split(" "); //split the string into an array of words
    let newString = ""; //create a variable to store the new string

    for (let index = 0; index < words.length; index++) { //loop through the array
      let word = words[index]; //create a variable to store the word
      if (index === words.length - 1) { //if the index is the last index
        newString += word; //add the word to the new string
      } else { //if the index is not the last index
        newString += word + " " + interruptingWord + " "; //add the word and the interrupting word to the new string
      }
    }
    return newString; //return the new string
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
