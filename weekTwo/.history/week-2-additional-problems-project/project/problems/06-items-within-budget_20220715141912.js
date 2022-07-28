/*
    Items Within Budget
    Write an arrow function itemsWithinBudget(budget, items) that accepts a budget number and an array of objects.
    The function should return an array of item names whose price is within budget.
    Look at examples below to see how item objects are structured.

    const items1 = [{name: 'iPhone', price: 700},
                      {name: 'laptop', price: 2000},
                      {name: 'guitar', price: 300},
                      {name: 'camera', price: 1200}
                    ]
    const items2 = [ {name: 'online classes', price: 1000},
                        {name: 'omakase bento box', price: 100},
                        {name: 'medicine', price: 50}
                    ]

    console.log(itemsWithinBudget(1000, items1)) // prints ['iPhone', 'guitar']
    console.log(itemsWithinBudget(200, items2)) // prints ['omakase bento box', 'medicine']
*/

  const itemsWithinBudget = (budget, items) => {
    let result = []; //create a variable to store the result
    items.forEach(element => { //loop through the array with forEach
        if (element.price <= budget) { //if the price of the item is less than or equal to the budget
            result.push(element.name); //add the name of the item to the result
        }
    });
    return result; //return the result


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = itemsWithinBudget;
} catch (e) {
    module.exports = null
}
