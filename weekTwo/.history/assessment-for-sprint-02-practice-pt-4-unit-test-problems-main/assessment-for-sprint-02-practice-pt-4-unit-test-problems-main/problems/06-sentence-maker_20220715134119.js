/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

const sentenceMaker = (...args) => {
	let sentence = ''; //create an empty string to store the sentence
	for (let i = 0; i < args.length; i++) { //loop through the arguments
		sentence += args[i]; //add the argument to the sentence
		if (i !== args.length - 1) { //if the argument is not the last one
			sentence += ' '; 	//add a space between the arguments
		}
	}
	return sentence + '!'; //return sentence with ! at the end
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
