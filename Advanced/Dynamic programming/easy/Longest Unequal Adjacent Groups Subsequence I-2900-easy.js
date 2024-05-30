/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let cur = groups[0];
    let res = [words[0]];

    for(let i = 1;i < groups.length; i++) {
        if(cur !== groups[i]) {
            cur = groups[i];
            res.push(words[i]);
        }
    }

    return res;
};
console.log(getLongestSubsequence(["e","a","b"], [0,0,1])); // ["e","b"]