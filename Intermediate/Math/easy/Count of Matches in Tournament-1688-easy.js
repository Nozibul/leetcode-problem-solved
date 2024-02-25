/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let temp = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            temp += n / 2; 
            n = n / 2;
        } else {
            const res = (n - 1) / 2
            temp += res;
            n = res + 1;
        }
    }
    return temp;
};
const result1 = numberOfMatches(14);
console.log(result1); // Output: 5

const result2 = numberOfMatches(7);
console.log(result2); // Output: 6



var numberOfMatches = function(n) {
    return n-1;
};
