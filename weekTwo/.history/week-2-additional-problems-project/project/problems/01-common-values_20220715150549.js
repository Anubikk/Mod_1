/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

const commonValues = (obj1, obj2) => {
    let common = []; //create a variable to store the common values


// function commonValues(obj1, obj2) { //create a function
//   let arr = []; //create an array to store the values
//   for (let key in obj1) { //for each key in obj1
//     if (obj2[key]) { //if the key is in obj2
//       arr.push(obj1[key]); //push the value to the array
//     }
//   }
//   return arr; //return the array

// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
