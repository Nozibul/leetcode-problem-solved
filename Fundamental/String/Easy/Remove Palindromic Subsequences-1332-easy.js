/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    return s === s.split('').reverse().join('') ? 1 : 2;
};
console.log(removePalindromeSub("ababa")); // 1