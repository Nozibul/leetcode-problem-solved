/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15,celsius*1.80+32.00]  
};
console.log(convertTemperature(36.50)); // [309.65000,97.70000]