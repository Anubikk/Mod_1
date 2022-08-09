/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
    let words = sentence.split(' ');
    let shortest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length || shortest === '') {
          if (words[i].length === shortest.length) {
            if (words[i] < shortest) {
              shortest = words[i];
            }
          } else {
          shortest = words[i];
        }
    }
    return shortest;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
