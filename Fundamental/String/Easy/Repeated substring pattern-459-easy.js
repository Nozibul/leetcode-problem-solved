/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
 let reg = /^(\w+)\1+$/
 return reg.test(s);
};
const result = repeatedSubstringPattern("abcabcabcabc");
console.log(result);