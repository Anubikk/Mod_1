
//WHILE LOOPS
    //begining
let index = 0;
    //conditional
while (index < 5) {
    console.log("hello world");
    index ++; //Ending condition
}

// FOR LOOPS

// is odd code
function isOdd(number) {
    return (number % 2 !== 0);
  }

  function isOddConditional(number) {
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17));


  // log between code
  function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }

  function logBetweenWhile(lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }


  // log between stepper code
  function logBetweenStepperFor(min, max, step) { //FOR LOOP
    for (let i = min; i <= max; i += step) {
      console.log(i);
    }
  }

  function logBetweenStepper(min, max, step) { //WHILE LOOP
    let i = min;
    while (i <= max) {
      console.log(i);
      i += step;
    }
  }

// 3OR7 code
function threeOrSeven(number) {
    return (number % 7 === 0) || (number % 3 === 0);
  }

function threeOrSevenConditional(number) {
    if ((number % 7 === 0) || (number % 3 === 0)) {
      return true;
    } else {
      return false;
    }
  }


  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    sum += num;
  }

  return sum;



// Sum of arrays code
function sumArrayWhile(array) {
  let sum = 0;
  let i = 0;

  while (i < array.length) {
    let num = array[i];
    sum += num;
    i += 1;
  }

  return sum;
}


// Add array code
function combineArray(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray;
}

// Doubler code
function doubler(numbers) {
  let doubledNums = [];

  let i = 0;
  while (i < numbers.length) {
    let oldNum = numbers[i];
    let newNum = oldNum * 2;
    // this step is important because concat does NOT change the original array
    doubledNums = doubledNums.concat(newNum);

    i += 1;
  }

  return doubledNums;
}

//REMOVE LAST VOWEL DEMO

function removeLastVowel(word) {
  let vowels = "aeiou"; // declare vowels

  for (let i = word.length -1; i > 0; i--) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
    return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'


//LAST VOWEL DEMO

let lastVowel = function(str) {
  let vowels = 'aeiou';

  for (let i = str.length - 1; i >= 0; i--) {
      let letter = str[i];
      if (vowels.includes(letter.toLowerCase())) {
      return letter;
      }
  }
  return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null


//FIRST VOWEL DEMO

function hasVowel(word) {
  let index = 0;

 while (index < word.length) {
   let letter = word[index];

   if (letter === "a" ||
       letter === "e" ||
       letter === "i" ||
       letter === "o" ||
       letter === "u") {
         return true;
   }
   index++;
 }
 return false;

}


// HAS VOWEL DEMO


function hasVowel(word) {
  let index = 0;

 while (index < word.length) {
   let letter = word[index];

   if (letter === "a" ||
       letter === "e" ||
       letter === "i" ||
       letter === "o" ||
       letter === "u") {
         return true;
   }
   index++;
 }
 return false;

}


console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false

//HAS VOWEL FOR LOOP
let hasVowel = function(str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (vowels.includes(char)) {
          return true;
      }
  }

  return false;
};






// Vowel counter code

function countVowels(word) {
  //0. set a vowelcounter var
  //1. iterate incoming word
  //2. checking vowels within word
  //3. increment vowel counter if the current letter is a vowel

  let vowelCounter = 0;

  let index = 0;

  while (index < word.length) {
    let letter = word[index];


    if (letter === "a" ||
        letter === "e" ||
        letter === "I" ||
        letter === "o" ||
        letter === "u") {
          vowelCounter += 1;
    }
    index++;
  }

  return vowelCounter;
}

// FOR COUNTER CODE
function eCounter(word) {
   let count = 0;

   for (let index = 0; index < word.length; index++) {
     let char = word[index];
     if (char === "e" || char === "E") {
       count += 1;
     }
   }

   return count;
 };


// Is substring code
function isSubstring(searchString, subString) {
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}


//PIT PAT DEMO

function pitPat(max) {
  let numArr = [];

  for (let i = 1; i <= max; i++) {
    if ((i % 4 === 0 || i % 6 === 0) && (i % 12 !== 0)) {
      numArr.push(i);
    }
  }
  return numArr;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]


// Fizz Buzz code : Define a function fizzBuzz(max) that takes a number and prints
// every number from 0 to max (not inclusive) that is divisible by either 3 or 5,
// but not both.

function fizzBuzz (max) {
  for (let i = 0; i < max; i++) {  // == for (let i = 0; i < max; i +=)
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzzWhile(max) {
  let i = 0;
  while (i <max) {
    if (i % 3 ===0 && i %5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i)
    }
    i++;
  }
}

function fizzBuzzNested(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        console.log(i);
      }
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}


//FIZZBUZZ ARRAY DEMO

function fizzBuzz(max) {
  let nums = []
  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      nums.push(i);
    }
  }
  return nums;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]


// array.IndexOf Code : Write a function named wordWithinArray(array,word) using Array.indexOf.
  // The function takes in both a word and an array of words as arguments and returns a boolean
  // that returns true if that string is located inside of the array, or false if it does not.

function wordWithinArray(array, word) {
  // 1. determine if word is within array with .indexOf()
  // 2. check if results are valid from step one (not -1)
  // 3. return results as true or false based on results
  let wordIndex = array.indexOf(word)
  if (wordIndex === -1) {
    return false;
  }

  return true;
}

// ECHO code
function echo(string) {
  let echoStr = string.toUpperCase() + "..." + string + "..." + string.toLowerCase();
  return echoStr;
}

console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
console.log(echo("hey")); // => prints "HEY ... hey ... hey"
console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"


// Either string included
// console.log(sentence.includes(word));

function eitherStringIncluded(sentence, word1, word2) {
  //1. sentence has first word
  //2. sentence has second word
  //3. check if results are true or false and return true or false

  let firstWordIncluded = sentence.includes(word1);
  let secondWordIncluded = sentence.includes(word2);

  if (firstWordIncluded || secondWordIncluded) {
    return true;
  }

  return false
}

// Pig Latin Word Problem

function pigLatinWord(word) {
  // 1. define a vowels var
  // 2. determine if first letter is vowel
      //a. if so return word with "yay"
  // 3. iterate until vowel is found
      //a. take all the contanece before surrent letter
      //b. append const clump to the end of word
      //c. add "ay" and return

  let vowels = "aeiou";
  if (vowels.includes(word[0])){
    return word + "yay";
  }
  for (let index = 0; i < word.length; i++) {
    let letter = word[i];

    if (vowels.includes(letter)) {
      let firstPart = word.slice(i);
      let secondPart = word.slice(0, i);
      return firstPart + secondPart + "ay";
    }
  }
  return word;
}

// avg of four problem

function averageOfFour(num1, num2, num3, num4) {
  // 1 sum of the four vars
  // 2 divide sum by four
  // 3 return the new avg

  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

console.log(averageOfFour(10, 10, 15, 5)); // =>10


// IS FIVE CODE

function isItFive(num){
  if (num < 5) {
    return num + " is less than five"
  }
}
//for loop example

let words = "Journey before destination";

for (let index = 0; index < words.length; index = index + 1){
  let char = words[index]
  console.log(char)
}

//for loop exmp 2
let arr2 = [42, false, "Let's go Pens", undefined, [[1], 2, [3]]];

console.log("My array:", arr2)
for (let i = 0; i < arr2.length; i++){
  console.log("current index:", i)
  let currentEle = arr2[i]
  console.log("current element:", currentEle)
}

let arr2 = [42, false, "Let's go Pens", undefined, [[1], 2, [3]]];

console.log("My array:", arr2)
for (let i = 0; i < arr2.length; i++){
  console.log("current index:", i)
  let currentEle = arr2[i]
  let type = typeof currentEle
  console.log("current element:", currentEle)
  console.log("its type is: ", type)
}

//CONCAT DEMO

let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let combined = array1.concat(array2, array3)

console.log(combined)
// example 2
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let combined = array1.concat(array2, array3);

console.log(combined.join(" "))//value 1 2 3 4 5 6 7 8 9

// PrintFives Code
function printFives1For(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

function printFives2(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
}

function printFives2While(max) {
  let i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}


//CHOOSE PRIMES DEMO

function isPrimes(num) {
  if (num < 2)
    return false;
  for (let i = 2; i < num; i++) {
    if (num % i ===0) {
      return false;
    }
  }
  return true;
}

function choosePrimes(nums) {
     let arePrimes = [];

  for (i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (isPrimes(num)) {
      arePrimes.push(num);
    }
  }
  return arePrimes;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]




// IS PRIME CODE
let isPrime = function(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }

  return true;
}


// Expression syntax vs Declaration Syntax

function declarationSyntax(param1, param2){
  return param1 + param2;
};

let expressionSyntax = function(param1, param2){
  return param1 + param2;
}

console.log(declarationSyntax(2,4)) // -> 6
console.log(expressionSyntax(2,4))  // -> 6

// EXAMPLES

// SUM ARRAY DEMO
// write a function that will accept an array of numbers
// and return the sum of numbers
// for loop

let sumArray = function(numsArray){
  let sum = 0
  for(let i = 0; i < numsArray.length; i++){
    console.log("current index: ",i)
    console.log("sum at start of loop: ", sum)
    let currentNumber = numsArray[i]
    console.log("current number is: ", currentNumber)
    sum += currentNumber
    console.log("sum at the end of loop: ", sum)

  }
return sum;
}

let nums = [1,2,3,4,5]
console.log(sumArray(nums));

//more practical SUM ARRAY

function sumArray(array) {
  let sum = 0;
for(let i = 0; i < array.length; i++) {
    let num = array[i];
    sum += num;
}
return sum;
}


// ARRAY PUSH METHOD -adds to end of array
let people = [ "rosemary", "alex", "josh", "polina", "david", "anna" ];
people.push("kevin");
console.log(people);

//ARRAY POP METHOD -removes last from array
let people = [ "rosemary", "alex", "josh", "polina", "david", "anna" ];
people.pop();
console.log(people);

//ARRAY SHIFT METHOD -removes from the begining of array
let people = [ "rosemary", "alex", "josh", "polina", "david", "anna" ];
people.shift();
console.log(people);

//ARRAY UNSHIFT METHOD -adds to the begining of an array
let people = [ "rosemary", "alex", "josh", "polina", "david", "anna" ];
people.unshift("kevin", "rose");
console.log(people);

//example 2 - will add numbers till it reaches condition of 100
let newArr = []

let i = 0;
while (newArr.length < 100) {
  newArr.unshift(i)
  i++;
}

console.log(newArr)

// MAKING AN ARRAY ALL UPPERCASE
let people = [ "rosemary", "alex", "josh", "polina", "david", "anna" ];

let newPeople = [];
for (let i =0; i< people.length; i++) {
  let person = people[i];
  let upperCase = person.toUpperCase();
  newPeople.push(upperCase);
}


// ADD to array research

function addToArray(location, element, arr) {
  if (location == "FRONT") {
    arr.unshift(element)
  } else if (location == "BACK"){
    arr.push(element)
  } else {
      console.log("ERROR");
 }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]

// REMOVE FROM ARRAY RESEARCH
function removeFromArray(location, arr) {
  if (location == "FRONT") {
    arr.shift()
  } else if (location == "BACK") {
    arr.pop()
  } else {
    console.log("ERROR")
  }
}


testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]

// NESTED LOOPS DEMO
for (let i = 0; i <= 2; i++) {
  console.log(i);
  for (let j = 0; j <= 4; j++) {
    console.log(i,  j);
  }
}

// NESTED LOOPS TWO SUM DEMO
let twoSum = function(nums, targetSum) {
  for(let i = 0; i < nums.length; i++){
    let firstNum = nums[i]
    for (let j = i + 1; j < nums.length; j++){
      let secondNum = nums[j]
      if (firstNum + secondNum === targetSum) return true
    }
  }
  return false;
}
console.log(twoSum([1,2,3], 6))



// THE LONGEST NAME DEBUG DEMO

function longestName(names) {

  // Set the first name to be the longest
  let currentLongest = names[1];

  // Check each other name in the array starting from the second
  for (let i = 2 ; i <= names.length ; i++) {

      // If the name we're checking is longer than our
      // current longest, set that name to be the new longest
      if (names[i].length > currentLongest.length) {
          currentLongest = names[i];
      }

  }

  return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
           "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
           "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"

// .SPLICE DEMO

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(2, 3); // Removes 3 elements @ position 2. can add a peram to replace what is spliced
console.log(arr); // returns ["a", "b", "f"]

// .SLICE METHOD

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(1, 3); // Will grab index 1 and one before second index. IE "b" & "c"
console.log(arr);// will return ["b", "c"]

// REVERSe STRING DEMO
function reverseString(str) {
  let splitString = str.split(""); //// ["h", "e", "l", "l", "o"]
  let reverseArray = splitString.reverse(); // ["o", "l", "l", "e", "h"]
  let joinArray = reverseArray.join(""); // "olleh"
  return joinArray;
}




console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

// RANGE DEMO

let range = function(min, max) {
  let array = []; // Creates an empty array to contain computations

  for (let i = min; i <= max; i++) {
      array.push(i);
  }

  return array;
};

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

// INCLUDES DEMO

let myIncludes = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      let input = arr[i];
      if (target === input) {
          return true;
      }
  }

  return false;
};
console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false


// FACTORS OF DEMO

let factorsOf = function(num) {
  let factFive = [];

  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factFive.push(i);
      }
  }

  return factFive;
}

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]


//MY INDEX OF DEMO
let myIndexOf = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      let input = arr[i];
      if (target === input) {
          return i;
      }
  }
return -1;
}


console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

//EVEN NUMBER DEMO

function evenNumbers(max) {
  let evenNum = [];

  for (let i = 1; i < max; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]


//PAIRS MAKER

let pairsMaker = function(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
      for (let x = i + 1; x < arr.length; x++) {
         let pair = [ arr[i], arr[x] ];
         pairs.push(pair);
      }
  }
  return pairs;
}

console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]


//MIN VALUE DEMO
function minValue(numStr) {
  let min = null;
  for (let i = 0; i < numStr.length; i++) {
    let num = numStr[i];
    if (min === null || num < min) {
    min = num;
    }
  }
  return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null


//ROTATE RIGHT DEMO
let rotateRight = function(array, num) {
  let copy = array.slice();

  for (let i = 0; i < num; i++) {
      let cont = copy.pop();
      copy.unshift(cont);
  }

  return copy;
};

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


//TWO DIMENSIONAL SUM DEMO

let twoDimensionalSum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i];

      for (let j = 0; j < subArr.length; j++) {
          sum += subArr[j];
      }
  }

  return sum;
};

let arr1 = [
  [1, 3],
  [-4, 7, 10],
  [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
  [],
  [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6


//TWO PRODUCT DEMO

function twoDimensionalProduct(array) {
  let prod = 1;

  for (let i = 0; i < array.length; i++) {
    let subArray = array[i];

    for (let x = 0; x < subArray.length; x++) {
      prod *= subArray[x];
    }
  }
  return prod;
}

//POPPER DEMO

function popper(array, num) {
  let removed = [];

 for (let i = 0; i < num; i++) {
   let numLeft = array.pop();
   removed.push(numLeft);

 }
 return removed;
}


let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

// LEAST COMMON MULTIPLE DEMO
function leastCommonMultiple(num1, num2) {
  for ( i = 1; i <= (num1 * num2); i++) {
    if (i % num1 === 0 && i % num2 ===0) {
      return i;
    }
  }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

// RETURN EVENS IN AN ARRAY
//

let myArr = [1, 54, 37, 28, 30, 23, 42, 77, 54, 231, 145]
          // 0   1   2   3  4   5    6   7   8   9    10
// 1. iterate the array
     //determine if number is even
     //if true - push to new array
//2 return new array

function isEven(num) {
  console.log(num)
  return num % 2 === 0
}

function getEvenNums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
        if(isEven(arr[i])) {
          newArr.push(arr[i])
        }
  }
  return newArr;
}

// console.log(myArr)
console.log(getEvenNums(myArr))




// format code
function sumArray(arr){
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    let add = arr[i];
    sum += add;
  }
  return sum;
}


//REMOVE E WORDS

let removeEWords = function(sentence) {
  let words = sentence.split(' '); //splits string by spaces

  let filtered = [];
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (!word.toLowerCase().includes('e')) {
          filtered.push(word);
      }
  }

  return filtered.join(' ');
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'


//REVERSE SENTENCE DEMO

let reverseSentence = function(sentence) {
  let words = sentence.split(' ');
  let newWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
      newWords.push(words[i]);
  }

  let newSentence = newWords.join(' ');
  return newSentence;
};

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

//INITIALS DEMO
function initials(name) {
  let splitName = name.split(' ');
  let letters = [];

  for (let i =0; i < splitName; i++) {
    let letter = splitName[i];
    letters.push(letter[0].toUpperCase());
  }
  return letters.join(' ');
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'


//YELLER DEMO

function yeller(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newWords.push(word.toUpperCase() + "!")
  }
  return newWords;
}




console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]


//Choosey ENDINGS DEMO

function chooseyEndings(words, suffix) {
  if (!Array.isArray(words)) {
    return [];
  }

  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.endsWith(suffix)) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]


// FACTORS COMMON DEMO

function commonFactors(num1, num2) {
  let factors = [];

  for (let i = 1; i <= num1; i++){
    if (num1 % i === 0 && num2 % i ===0) {
      factors.push(i);
    }
  }
  return factors;
}


console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]              // [1]

// HAS DOUBLE LETTER

function hasDoubleLetter(str) {
  if (typeof str !== 'string') {
    return null;
  }

  for (let i =0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null


// FIRST AND LAST DEMO

function firstAndLast(nums) {
  let firstNum = nums[0];
  let lastNum = nums[nums.length -1];

  if (nums.length % 2 === 0) {
    return firstNum + lastNum;
  } else {
    return firstNum - lastNum;
  }
}

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4

// ADJACENT SUMS

function adjacentSums(nums) {

  let newPairsArr = [];

  for (let i = 0; i < nums.length -1; i++) {
    let sum = nums[i] + nums[i + 1];
  		newPairsArr.push(sum);
  }
  return newPairsArr;
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]



//STRING CHANGER

function stringChanger(word, operation) {
  if (operation === "capitalize") {
    return word[0].toUpperCase() + word.slice(1)
  }
  if (operation === "upercase") {
    return word.toUpperCase()
  }
  if (operation === "double") {
    return word + word
  }
  if (operation === "reverse") {
    let newWord = word.split('')
    return newWord.reverse().join('')
  }
  return word;
}


//DOUBLE SEQUENCE
let doubleSequence = function(base, length) {
  if (length === 0) {
      return [];
  }

  let seq = [base];
  while (seq.length < length) {
      let last = seq[seq.length - 1];
      let next = last * 2;
      seq.push(next);
  }

  return seq;
};

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]


//REVERB DEMO

function reverb(word) {
  if (typeof word !== 'string') {
    return null;
  }
  let vowels = 'aeiouAEIOU';


  for (let i = word.length - 1; i >= 0 ;i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }
  return word;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null


//PAIR PRODUCT DEMO

function pairProduct(nums, prod) {

  for (let i = 0; i < nums.length; i++) {
    for (let x = i; x < nums.length; x++) {
      if (nums[i] * nums[x] === prod) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false


//SNAKE TO CAMEL DEMO


function snakeToCamel(str) {
  let words = str.split('_');
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      newWords.push(newWord);
  }
  return newWords.join('');
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

//STRANGE SUMS

function strangeSums(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let x = i; x < nums.length; x++) {
      if (nums[i] + nums[x] === 0) {
        count++;
      }
    }
  }
   return count;
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));

// TRIPLET TRUE CODE
function tripletTrue(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i-1] && str[i-1] === str[i-2]) {
      return true;
    }
  }
  return false;
}



console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

// THREE INCREASING

function threeIncreasing(nums) {
  for (let i = 0; i < nums.length -2; i++) {
    if (nums[i] +1 === nums[i + 1] && nums[i + 1] +1 === nums[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false


// UNCOMPRESS DEMO

function uncompress(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i += 2) {
      let char = str[i];
      let num = Number(str[i + 1]);

      for (let times = 0; times < num; times += 1) {
          newStr += char;
      }
  }

  return newStr;
};
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'




// Week 1:
// Study problems:
// Arrays:
// Doubler (Tues)
// Yeller (Fri)
// Avg Val (Thurs)
// Longest Word (Thurs)
// Conditionals:
// Three or Seven (Tues)
// Fizz Buzz (Tues)
// Loops: Log Between Stepper (Tues)
// My Index Of (Wed)
// Range (Wed)
// Last Index (Bonus)
// Debugging: Longest Name - Debugging () (Wed)
