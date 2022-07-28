// FAT ARROW SYNTAX
let numbers = function() {

}

let numbers = () => {

}

let numbers = (num) => {
    return num + 5;
}

// IMPLICIT RETURN
//  1. must be a single line return
//  2. must ommit curly braces {}

let addFive = (num) => {
    return num +5
}
// IMPLICIT RETURN DEMO
let addFive = num +> num + 5


// HIGHER ORDER FUNCTION
// Takes a function as an argument or returns a function.


// CALL BACK FUNCTION
// any function that is passed as an argument to another function so that it can executed in that other function.



// CALLBACK FUNCTION
// is a function without a name. when a function is being used as a callback



// FOR EACH ARRAY METHOD
// second arg is always index [i]

let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];

parks.forEach(function(park) {
        console.log(park);
});
//
let word = ['rectangle', 'America', 'megaphone', 'Monday'
let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181]

for (let i = 0; i < words.length; i++) {
    let word = words[i]
     console.log(word)
}

words.forEach(
    (el, i , arr) => {
        console.log(el)
    }
)

//MAP ARRAY FUNCTION
// Function to convert an age to a phase of life
const getLifePhase = function(age) {
    if (age < 4)
        return 'Toddler';
    if (age < 13)
        return 'Kid';
    if (age < 18)
        return 'Teenager';
    if (age < 65)
        return 'Adult';
    // if no other condition is met
    return 'Elder';
}

// Array of ages, for example
const ages = [2, 7, 15, 29, 45, 44, 59, 65, 88];

// Loop to convert each age to its life phase
const phases = [];
for (let i=0; i<ages.length; i++) {
    const age = ages[i];
    phases[i] = getLifePhase(age);
}

// Output to console
console.log(phases);
// Expected result:
// [
//   'Toddler',  'Kid',
//   'Teenager', 'Adult',
//   'Adult',    'Adult',
//   'Adult',    'Elder',
//   'Elder'
// ]


//FOR EACH METHOD
// The initial value for total sales is zero
let totalSales = 0;

// Function to add a value to the total sales
const addToTotalSales = function (value) {
   totalSales += value;
}

// Some sales numbers to experiment with
const monthlySales = [1234, 2345, 3456, 4567, 5678];

// Loop through all sales numbers to add them to the total
for (let i=0; i<monthlySales.length; i++) {
    addToTotalSales(monthlySales[i]);
}

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280


//FILTER METHOD
// Array of toys, for example
const toys = [
    'Red Ball',
    'Pink Elephant',
    'Clown with Red Nose',
    'Teddy Bear (Brown)',
    'Firefighter Hat (Red)'
];

// Loop to get only the red toys
const redToys = [];
for (let i=0; i<toys.length; i++) {
    const toy = toys[i];
    if (toy.toLowerCase().indexOf('red') > -1)
        redToys.push(toy);
}

// Output to console
console.log(redToys);
// Expected output:
//     [ 'Red Ball', 'Clown with Red Nose', 'Firefighter Hat (Red)' ]


//SUM FOREACH

// Write a function `sumForEach(arr)` that accepts an array as an arg.
// The function should return the total sum of all values in the array.

// Solve this using Array's `forEach()` method.

// Examples:

// console.log(sumForEach([4, 3, -1, 10])); // 16
// console.log(sumForEach([6, 7, 2])); // 15
// console.log(sumForEach([])); // 0
// */

// let arr = [4, 56, 76, 44, 50, 120, 3, 7, 5]

let sumForEach = function(arr) {
  let sum = 0;

  arr.forEach(function(el) {
      sum += el;
  });

  return sum;
};



//OBJECTS

function countScores(people)
  let pplList = [
    {name: "Hayden", score: 2},
    {name: "Sasha", score: 5},
    {name: "Fred", score: 5},
    {name: "Prandy", score: 4},
  ]

console.log(countScores(pplList))


// CALL BACK FUNTIONS

function sayHi(name) {
    return "hi" + name
}

function greeting(name, cb) {
    return cb(name) + " how are you today?"
}
console.log(name)

//

function calculator(num1, num2, operation) {
    return operation(num1, num2)
}

function addition(num1, num2){
    return num1 + num2;
}
let subtraction = (num1, num2) => num1 - num2  //FAT ARROW FUNCTION FORMAT
let divide = (num1, num2) => num1 / num2

console.log(calculator(6, 2, addition))


// POKEMON CREATOR

let pokemonCreator = () => {
    let selectionOfPokemon = [
      { name: "Bulbasaur", type: "Grass"},
      { name: "Charmander", type: "Fire"},
      { name: "Squirtle", type: "Water"},
      { name: "Pidgey", type: "Flying"},
      { name: "Pikachu", type: "Electric"},
      { name: "Eevee", type: "Normal"},
      { name: "Gyrados", type: "Water"},
      { name: "Articuno", type: "Ice"},
      { name: "Zapados", type: "Electric"},
      { name: "Moltres", type: "Fire"},
      { name: "Dragonite", type: "Dragon"},
      { name: "Mewtwo", type: "Psychic"},
      { name: "Mew", type: "Psychic"},
    ];

    let pokemons = [];

    for (let i = 0; i < 1000; i++) {
      let pokemonNumber = Math.floor(Math.random() * selectionOfPokemon.length);
      let level = Math.ceil(Math.random() * 100);

      pokemons.push({
        ...selectionOfPokemon[pokemonNumber],
        level,
      });
    }

    return pokemons;
  }

  console.log(pokemonCreator())

  //FILTER
  let bigOlList = pokemonCreator()

  let displayPokemon = (pokemons, filterFunc) => {
      if (!filterFunc) return pokemons
      let results = filterFunc(pokemons)
      return results
  }
// TO GET JUST NAMES
  let getNames = (pokemons) => pokemons.map(pokemon => pokemon.name) //ARROW FUNCTION

  function getNames(pokemons) { //BRACKET STYLE
      let names = pokemons.map(function(pokemon){
          return pokemon.name
      })
  }
 console.log(displayPokemon(bigOlList, getNames))

 // GET NAMES WITHOUT DOUBLES
 let getBulbasaur = pokemons => pokemons.filter(pokemon => pokemon.name === "Bulbasaur")

 function getBulbasaur(pokemon){
    let bulbaPedia = pokemons.filter(function(pokemon){
    return pokemon.name === "Bulbasaur"
    })
    return bulbaPedia
}

//
