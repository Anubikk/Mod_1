/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `temperatureRange` - What is the temperature range for each month in each
city?

In this case, temperature range is the difference in temperature between the
high temperature and low temperature in a given month ( range = high - low ).

Write a function, `temperatureRange` that takes in the climate data, and returns
a new copy of the array that includes all of the city data. Each city object
should have a "monthlyTemperatureRange" key that points to an array of objects
formatted to match the example output below:

[
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyTemperatureRange": [
        { "month": "January", high: x, low: x, range: x },
        { "month": "February", high: x, low: x, range: x },
        // ... continued for all 12 months
    ]
  },
  // ... constinued for all cities in the original climateData array
]:

Note: You can solve this in multiple ways. Try using a few advanced array
methods. Can you use helper methods to separate out the logic?
*/

// const temperatureRange = () => {
//     const cities = climateData.map(city => {
//         const monthlyTemperatureRange = city.rainfall.map((month, index) => {
//             return {
//                 month: month.month,
//                 high: Math.max(...month),
//                 low: Math.min(...month),
//                 range: Math.max(...month) - Math.min(...month)
//             }
//         })
//         return {
//             id: city.id,
//             city: city.city,
//             country: city.country,
//             monthlyTemperatureRange: monthlyTemperatureRange
//         }
//     }).sort((a, b) => a.id - b.id)
//     return cities
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ temperatureRange ];
