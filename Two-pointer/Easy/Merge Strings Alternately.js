/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    // Edge case - if either word is empty, return the other word
    if (!word1 || word1.length === 0) return word2;
    if (!word2 || word2.length === 0) return word1

    // Variable for storing result
    let result = "";
    let i = 0, j = 0;

    // MAin logic
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) result += word1[i++];
        if (j < word2.length) result += word2[j++];
    }
    // Return Statement
    return result;
};

const mergeAlternately2 = function(word1, word2) {
    // Edge case - if either word is empty, return the other word
    if (!word1 || word1.length === 0) return word2;
    if (!word2 || word2.length === 0) return word1

    // Variable for storing result
    let result = [];
    let i = 0, j = 0;

    // MAin logic
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) result.push(word1[i++]);
        if (j < word2.length) result.push(word2[j++]);
    }
    // Return Statement
    return result.join('');
};
// Test
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately2("abcd", "pq")); // "apbqcd"
console.log(mergeAlternately2("", "xyz")); // "xyz"
console.log(mergeAlternately("hello", "")); // "hello"
