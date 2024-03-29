/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = {};
    const n = nums.length;
    let ans = 0;
    let i = 0;
    let j = 0;
    while (j < n) {
        freq[nums[j]] = (freq[nums[j]] || 0) + 1;
        while (freq[nums[j]] > k) {
            freq[nums[i]]--;
            i++;
        }
        ans = Math.max(ans, j - i + 1);
        j++;
    }
    return ans;
};

console.log(maxSubarrayLength([1,2,3,1,2,3,1,2], 6)); // 6