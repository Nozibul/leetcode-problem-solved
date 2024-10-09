/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0 ) return 0; 
    let res = duration;
    
    for (let i = 1; i < timeSeries.length; i++) {
            res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return res; 
};

console.log(findPoisonedDuration([1, 4], 2)); // 4