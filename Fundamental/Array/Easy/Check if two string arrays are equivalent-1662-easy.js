/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const w1 = word1.join("");
    const w2 = word2.join("");
    if(w1 === w2) return true;
    return false;
};
const result = arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);
console.log(result);