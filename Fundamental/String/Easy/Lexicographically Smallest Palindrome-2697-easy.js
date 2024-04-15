/**
 * @param {string} s
 * @return {string}
 */
const makeSmallestPalindrome = function (s) {
    s = s.split('')
    const n = s.length;
    const halfN = Math.trunc(n / 2);
  
    for (let i = 0; i < halfN; i++) {
      if (s[i] !== s[n - 1 - i]) {
        if (s[i] < s[n - 1 - i]) {
          s[n - 1 - i] = s[i]
        } else {
          s[i] = s[n - 1 - i]
        }
      }
    }
    return s.join('');
  }
  console.log(makeSmallestPalindrome("egcfe")); // "efcfe"
  console.log(makeSmallestPalindrome("abcd")); // "abba"