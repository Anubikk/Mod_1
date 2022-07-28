/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/
function duplicateCharMinCount(string, minCount) {
	let charCount = {}; 
	let charArray = [];
	for (let i = 0; i < string.length; i++) {
		if (charCount[string[i]] === undefined) {
			charCount[string[i]] = 1;
		} else {
			charCount[string[i]]++;
		}
	}
	for (let key in charCount) {
		if (charCount[key] >= minCount) {
			charArray.push(key);
		}
	}
	return charArray;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
