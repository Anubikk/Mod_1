/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

    console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
    console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
    console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}

*/

function characterCount(string) {
    let obj = {}; //create an empty object
    for (let i = 0; i < string.length; i++) { //loop through the string
        let letter = string[i]; //create a variable to store the character
        if (obj[letter]) { //if the character is in the object
            obj[char]++; //increment the value
        } else { //if the character is not in the object
            obj[char] = 1; //set the value to 1
        }
    }
    return obj; //return the object
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = characterCount;
} catch (e) {
    module.exports = null;
}
