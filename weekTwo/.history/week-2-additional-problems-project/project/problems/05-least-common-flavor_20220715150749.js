/*
Least common flavor:
    Write a function that accepts an object that represents a bag of candy with various flavors
    The keys of the object are flavors, and the values are the count of how many pieces of that flavor
    are in the bag. The function should return the name of the flavor that is the least common.
    If passed an empty object, the function should return null.

    const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
    console.log(leastCommonFlavor(bag1)); // prints 'orange'

    const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 }
    console.log(leastCommonFlavor(bag2)); // prints 'lemon'

    console.log(leastCommonFlavor({})); // prints null
*/

function leastCommonFlavor(candyBag) {
    let least = Object.keys(candyBag)[0]; //create a variable to store the least common flavor
    let leastCount = candyBag[least]; //create a variable to store the count of the least common flavor
    let 
    for (let key in candyBag) { //loop through the candy bag
        if (candyBag[key] < leastCount) { //if the count of the flavor is less than the least count
            least = key; //set the least to the flavor
            leastCount = candyBag[key]; //set the least count to the count of the flavor
        }
    }
    return least; //return the least common flavor
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastCommonFlavor;
} catch (e) {
    module.exports = null;
}
