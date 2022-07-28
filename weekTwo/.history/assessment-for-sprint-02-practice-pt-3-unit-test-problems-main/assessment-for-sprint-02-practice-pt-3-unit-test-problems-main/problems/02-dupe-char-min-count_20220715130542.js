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
	let letterCount = {}; //create an empty object to store the character and their count
	let lettersArray = [];//create an empty array to store the characters that show up at least minCount number of times
	for (let i = 0; i < string.length; i++) {//loop through the string
		if (letterCount[string[i]] === undefined) {//if the character is not in the object
			letterCount[string[i]] = 1;//add the character to the object and set the count to 1
		} else {//if the character is already in the object
			charCount[string[i]]++;//increment the count of the character
		}
	}
	for (let key in charCount) {//loop through the object
		if (charCount[key] >= minCount) {//if the count of the character is greater than or equal to minCount
			charArray.push(key);//add the character to the array
		}
	}
	return charArray;//return the array
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
