/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let ans = 0;
    
    for (let i=0; i<nums.length; i++) {
        if (nums.length % (i + 1) === 0 ) {
            ans += nums[i] ** 2;
        }
    }
    return ans;
};
console.log([1,2,3,4]); // 21