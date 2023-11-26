/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let words = s.split(" ");
    words.length = k ;
    return words.join(" ");
};
const result = truncateSentence("What is the solution to this problemt", 4);
console.log(result);