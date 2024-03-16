/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);
  
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? sum-- : sum++;

    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else map.set(sum, i);
  }

  return maxLen;
};
console.log(findMaxLength([0, 1, 0])); // 2
