/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {   
    let previous = 0;
    let bigResult = 0;
    
    for (let i = 0; i < gain.length; i += 1) {
        previous += gain[i];
        if (previous > bigResult) bigResult = previous;
    }
    
    return bigResult;
};
console.log(largestAltitude([-5,1,5,0,-7])); // 1
