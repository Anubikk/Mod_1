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

function countCharacters(string) {
	let count = {}; // create an empty object to store the counts
	for (let i = 0; i < string.length; i++) { // loop through the string
		let char = string[i]; // get the current character
		count[char] = count[char] + 1 || 1; // if the character is in the object, add 1 to its count, otherwise set it to 1
	}
	return count; // return the object

}

function duplicateCharMinCount(string, minCount) {
	 


}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
