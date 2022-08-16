/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


const iceCreamShop = (flavors, favorite) => {
  if (flavors.length === 0) { // base case
    return false; // if the array is empty, return false
  }
  if (flavors[0] === favorite) { // if the first element is the favorite, return true
    return true; // recursive call with the next element in the array and the favorite as arguments
  }
  return iceCreamShop(flavors.slice(1), favorite); // recursive call with the first element removed from the array and the favorite passed in as an argument
}

//second attempt
const iceCreamShop = (flavors, favorite) => {
  if (!flavors.length) { // base case
    return false; // if the array is empty, return false
  }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
