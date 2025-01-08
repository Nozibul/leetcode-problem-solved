
const countPrefixSuffixPairs = function(words: string[]): number {
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
                count++;
            }
        }
    }
    return count;
};
console.log(countPrefixSuffixPairs(["a","b","c","a","b","c"])) ; // 3