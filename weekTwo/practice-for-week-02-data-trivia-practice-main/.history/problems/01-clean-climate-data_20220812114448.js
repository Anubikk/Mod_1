/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

// 1) returns an array with an element for each city in the data set
// 2) each element is a string formatted in 'city, country' format
// 3) returns the correct output for all cities in the data set

const listAllCitiesWithCountries = (climateData) => {
    let cities = [];
    for (let i = 0; i < climateData.length; i++) {
        cities.push(climateData[i].city + ', ' + climateData[i].country);
    }
    return cities;
}



/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

// 1) returns an array
// 2) each element in the array is a string
// 3) each string is formatted in 'city, country' format
// 4) returns all of the United States cities in the data set

const listAllUsCities = (climateData) => {
    let usCities = [];
    for (let i = 0; i < climateData.length; i++) {
        if (climateData[i].country === 'United States') {
            usCities.push(climateData[i].city + ', ' + climateData[i].country);
        }
    }
    return usCities;
}



/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/

const findDuplicates = (climateData) => {
    const duplicates = {}
    climateData.map(city => {
        if (duplicates[city.city]) {
            duplicates[city.city].push(city.id)
        } else {
            duplicates[city.city] = [city.id]
        }
    }).sort()
    return duplicates
}


//  04. `returnDuplicate` Which city object should be corrected in
// the data set?

// Write a function, `returnDuplicate` that finds the ONE duplicated city,
// and returns the data (object) of the last instance of that city.

// For example, if `Paris` showed up twice with an id of 2 and 5, the function
// should and return the object with the id of 5.

// HINT: Use documentation to research the `find()` method in JavaScript. You may,
// but do not have to, use this method to solve this problem.
//

// 1) returns an object
// 2) the object contains the 'city', 'country', and 'monthlyAvg' keys
// 3) returns the correct object for the second instance of the duplicated city

const returnDuplicate = (climateData) => {
    let reduplicate = {}
    climateData.map(city => {
        if (duplicate[city.city]) {
            duplicate[city.city] = city
        } else {
            duplicate[city.city] = city
        }
    }).sort()
    return reduplicate
}


/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

// 2) finds the second instance of the ONE duplicated city
// 3) changes the name of the city to the name provided as a second argument
// 4) returns the correctly-formatted output with the new city name

const correctDuplicate = (returnDuplicate, newCity) => {
    let duplicate = returnDuplicate
    for (let key in duplicate) {
        if (duplicate[key].length > 1) {
            climateData[duplicate[key][duplicate[key].length - 1]].city = newCity
        }
    }
    return climateData
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
