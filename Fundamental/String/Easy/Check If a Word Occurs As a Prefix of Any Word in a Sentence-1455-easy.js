/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ')

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) return i + 1
    }

    return -1
};
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // "2"