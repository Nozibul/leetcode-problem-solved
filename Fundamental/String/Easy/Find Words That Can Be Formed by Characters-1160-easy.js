/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let isMatch = true;
        let charCount = {};

        // Count characters in chars
        for (let char of chars) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Check if the word can be formed using chars
        for (let j = 0; j < word.length; j++) {
            if (!charCount[word[j]]) {
                isMatch = false;
                break;
            } else {
                charCount[word[j]]--;
            }
        }

        if (isMatch) {
            count += word.length;
        }
    }

    return count;
};



// Example usage:
let words = ["hello", "world", "test"];
let chars = "helloworld";
// let result = countCharacters(words, chars);
// console.log(result); // Output: 10

const result = countCharacters(["cat","bt","hat","tree"], "atach")
console.log(result);