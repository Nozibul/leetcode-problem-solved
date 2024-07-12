/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    // maintaing result array
    const res = []
    // iterating over words and finding match
    for(let word of words){
        // if pattern is matched then push word in array
        if(patternMatcher(word,pattern)) res.push(word)
    }

    // returning result
    return res
};

/**
 * Function implemented to match the pattern abb == cdd
 * @returns boolean
 */
function patternMatcher(word,pattern){
    let d = {}
    for(let i = 0 ; i < pattern.length ;i++){
        if(!d[pattern[i]] && !Object.values(d).includes(word[i])){
            d[pattern[i]] = word[i]
        }else if(d[pattern[i]] !== word[i]) return false
    }

    return true;
}
console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb")); // ["mee","aqq"]