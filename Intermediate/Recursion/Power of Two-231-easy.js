/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//     return (Math.log2(n) % 1 === 0);
// };
// console.log(isPowerOfTwo(16)) //  true


// another solution 

    var isPowerOfTwo = function(n) {
        return Number.isInteger(Math.log2(n));
    }; 
    console.log(isPowerOfTwo(16));