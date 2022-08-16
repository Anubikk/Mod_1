/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

const listAllCitiesWithCountries = (climateData) => {
     climateData.for



/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

// const listAllUsCities = (climateData) => {
//     const usCities = climateData.filter(city => city.country === 'United States')
//     const usCitiesFormatted = usCities.map(city => `${city.city}, ${city.country}`)
//     return usCitiesFormatted
// }



/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/

// const findDuplicates = (climateData) => {
//     const duplicates = {}
//     climateData.forEach(city => {
//         if (duplicates[city.city]) {
//             duplicates[city.city].push(city.id)
//         } else {
//             duplicates[city.city] = [city.id]
//         }
//     });
//     return duplicates
// }


/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/

// const returnDuplicate = (climateData) => {
//     const duplicates = findDuplicates()
//     const duplicateCities = Object.keys(duplicates)
//     const duplicateCity = duplicateCities.find(city => duplicates[city].length > 1)
//     const duplicateCityData = climateData.find(city => city.city === duplicateCity)
//     return duplicateCityData
// }

/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

// const correctDuplicate = (data, newCity) => {
//     const duplicates = findDuplicates( data )
//     const duplicateCities = Object.keys(duplicates)
//     const duplicateCity = duplicateCities.find(city => duplicates[city].length > 1)
//     const duplicateCityData = climateData.find(city => city.city === duplicateCity)
//     duplicateCityData.city = newCity
//     return duplicateCityData
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
