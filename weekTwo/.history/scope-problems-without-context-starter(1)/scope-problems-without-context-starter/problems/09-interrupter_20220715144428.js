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

const interrupter = (interruptingWord) => {
    return function(string) { //return a function that takes in a string
        let words = string.split(" "); //split the string into an array of words
        for (let i = 0; i < words.length; i++) { //loop through the array
            if (words[i] === interruptingWord) {  //if the word is the interrupting word
                words[i] = interruptingWord + " " + interruptingWord; //replace the word with the interrupting word and the interrupting word
            }
        }
        return words.join(" "); //join the array into a string
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
