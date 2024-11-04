/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let compressed = "";
    let cnt = 1, n = word.length;
    let currentChar = word[0];
    for (let i = 1; i < n; i++) {
        if (word[i] === currentChar && cnt < 9) {
            cnt++;
        } else {
            compressed += cnt + currentChar;
            currentChar = word[i];
            cnt = 1;
        }
    }
    compressed += cnt + currentChar;
    return compressed;
};

console.log(compressedString("abcde")); // 1a1b1c1d1e
console.log(compressedString("aaaaaaaaaaaaaabb")); // 9a5a2b