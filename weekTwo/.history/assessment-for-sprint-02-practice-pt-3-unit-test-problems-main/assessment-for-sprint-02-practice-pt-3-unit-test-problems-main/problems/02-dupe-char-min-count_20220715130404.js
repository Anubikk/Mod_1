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
	let charCount = {}; //create an empty object to store the character and their count
	let charArray = [];//create an empty array to store the characters that show up at least minCount number of times
	for (let i = 0; i < string.length; i++) {//loop through the string
		if (charCount[string[i]] === undefined) {//if the character is not in the object
			charCount[string[i]] = 1;//add the character to the object and set the count to 1
		} else {//if the character is already in the object
			charCount[string[i]]++;//increment the count of the character
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
