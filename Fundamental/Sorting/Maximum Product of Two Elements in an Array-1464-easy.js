/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => b - a); // Sort the array in descending order // [ 5, 4, 3, 2 ]
  return (nums[0] - 1) * (nums[1] - 1); 
};

// Example usage:
const result = maxProduct([3, 4, 5, 2]);
console.log(result); // Output: 12
