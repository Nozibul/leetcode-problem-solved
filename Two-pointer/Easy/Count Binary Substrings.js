/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            curr++;
        }
        else {
            result ++;
        }
    }
   return result;
};
console.log(countBinarySubstrings("1010101")); // 6
console.log(countBinarySubstrings("00110011")); // 6