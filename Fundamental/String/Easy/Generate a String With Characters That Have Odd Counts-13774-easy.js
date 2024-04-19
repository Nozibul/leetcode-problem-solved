/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    return 'a'.repeat(n - 1) + (n % 2 ? 'a' : 'b');
};
console.log(generateTheString(4)); // "aaab"
console.log(generateTheString(2)); // "ab"