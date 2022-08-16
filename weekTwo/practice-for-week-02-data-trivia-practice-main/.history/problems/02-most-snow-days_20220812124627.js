/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/
    //write a function that returns key value pairs of cities that have  the highest number of snow days across all months returning the city name and number of snow days

const citiesWithMostSnowDays = (climateData) => {
   let cities = [];
   let totalSnowDays = 0;
    for (let i = 0; i < climateData.length; i++) {
        if (climateData[i].snowDays > totalSnowDays) {
            totalSnowDays = climateData[i].snowDays;
        }
    }
    for (let i = 0; i < climateData.length; i++) {
        if (climateData[i].snowDays === totalSnowDays) {
            cities.push({
                city: climateData[i].city + ', ' + climateData[i].country,
                totalSnowDays: climateData[i].snowDays
            });
        }
    }
    return cities;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
