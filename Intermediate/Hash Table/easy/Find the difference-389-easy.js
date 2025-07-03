/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function(s, t) {
//     for (let i = 0; i < t.length; i++) {
//         if(!(t[i] === s[i])) return t[i];
//     }
// };



/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ret = 0; 
    
    for (let i = 0; i < s.length; i++) {
        ret ^= s.charCodeAt(i); // XOR the character codes of string s, binary sum
    };
    for (let i = 0; i < t.length; i++) {
        ret ^= t.charCodeAt(i); // XOR the character codes of string t
    };
    
    return String.fromCharCode(ret); // Convert the XOR result to a character
};
const result = findTheDifference("ABC", "abcde");
console.log(result); // e
console.log(result.charCodeAt(0)); // 101
