/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let newStr = []
  for (let i = 0; i < indices.length; i++) {
      newStr[indices[i]] = s[i]
  }
  return newStr.join("");
};
const result = restoreString("codeleet", [4,5,6,7,0,2,1,3]);
console.log(result); // leetcode