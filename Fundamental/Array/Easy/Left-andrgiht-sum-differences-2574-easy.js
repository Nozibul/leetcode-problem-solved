/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const n = nums.length;

  const leftSum = new Array(n).fill(0); // [0, 10, 14, 22]
  const rightSum = new Array(n).fill(0); // [11, 14, 6, 0]
  const res = new Array(n).fill(0);

  // Calculate leftSum
  let currentLeftSum = 0; 
  for (let i = 0; i < n; i++) {
    leftSum[i] = currentLeftSum;
    currentLeftSum += nums[i];
  }

  // Calculate rightSum
  currentRightSum = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = currentRightSum;
    currentRightSum += nums[i];
  }

  // calculate answer
  for (let i = 0; i < n; i++) {
    res[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return res;
};
const result = leftRightDifference([10, 4, 8, 3]);
console.log(result);
