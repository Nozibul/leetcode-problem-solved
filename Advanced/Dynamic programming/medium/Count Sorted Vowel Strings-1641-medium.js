/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let a = 1, e = 1, i = 1, o = 1, u = 1
    while (n-- > 1) {
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
        u = u
    }
    return a + e + i + o + u
};
console.log(countVowelString(2)); // 15
/* 
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
*/