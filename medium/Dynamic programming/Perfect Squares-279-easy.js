/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  // Initialize an array to store the minimum number of squares required for each number from 0 to n
  const dp = [0];

  // Iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // Initialize dp[i] with the maximum possible value
    dp[i] = i;

    // Iterate over all possible squares less than or equal to i
    for (let j = 1; j * j <= i; j++) {
      // Update dp[i] with the minimum of its current value and dp[i - j*j] + 1
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  // Return the minimum number of squares required for n
  return dp[n];
};
console.log(numSquares(13)); // 2
// Explanation: 13 = 4 + 9
