/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns.reduce((a,c) => a + (word.includes(c) ? 1 : 0), 0)
};

console.log(numOfStrings(["a","abc","bc","d"], "abc")); // 3