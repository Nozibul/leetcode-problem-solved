/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (strs.length > 0) {
    const firstWord = strs[0]; // flower
    for (let i = 0; i < firstWord.length; i++) {
      if (strs.every((ele) => ele[i] === firstWord[i])) {
        prefix += firstWord[i];
      } else break;
    }
  }
  return prefix;
};
const result = longestCommonPrefix(["reflower", "flow", "flight"]);
console.log(result);
