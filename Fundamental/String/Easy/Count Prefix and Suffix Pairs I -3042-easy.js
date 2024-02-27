/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = i +1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i]) ) {
                count++
            }
        }
    }
    return count;
};

console.log(countPrefixSuffixPairs(["pa","papa","ma","mama"])); //2