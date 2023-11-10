/**
 * @param {string} word
 * @return {boolean}
 */
class Solution {
    detectCapitalUse(word) {
      return word.toUpperCase() === word || word.toLowerCase() === word || (word[0] === word[0].toUpperCase() && word.slice(1).toLowerCase() === word.slice(1));
    }
  }
  
  const solution = new Solution();
  console.log(solution.detectCapitalUse("USA")); // true
  console.log(solution.detectCapitalUse("leetcode")); // true
  console.log(solution.detectCapitalUse("Google")); // true
  console.log(solution.detectCapitalUse("FlaG")); // false
  
