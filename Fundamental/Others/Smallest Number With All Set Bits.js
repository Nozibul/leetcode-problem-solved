/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let startBit = 0;

    // Left shift to calculate 2^x - 1
    while ((1 << startBit) - 1 < n) {
        startBit++;
    }
    return (1 << startBit) - 1; 
};

console.log(smallestNumber(5));// 7
console.log(smallestNumber(10));// 15