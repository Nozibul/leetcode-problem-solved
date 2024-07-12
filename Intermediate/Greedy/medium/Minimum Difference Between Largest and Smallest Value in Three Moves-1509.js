/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    const n = nums.length;
    if (n <= 4) return 0; 
    nums.sort((a, b) => a - b); 
    
    return Math.min(
        nums[n - 1] - nums[3],
        nums[n - 2] - nums[2],
        nums[n - 3] - nums[1],
        nums[n - 4] - nums[0]
    );
};
console.log(minDifference([5,3,2,4]));// 0
console.log(minDifference([1,5,0,10,14]));// 11