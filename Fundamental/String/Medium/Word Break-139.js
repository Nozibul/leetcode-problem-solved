/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let w of wordDict) {
            let start = i - w.length;
            if (start >= 0 && dp[start] && s.substring(start, i) === w) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];    
};

console.log(wordBreak("leetcode", ["leet","code"])); // true
console.log(wordBreak("applepenapple", ["apple","pen"])); // true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // false