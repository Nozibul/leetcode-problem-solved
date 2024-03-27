/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        const idx = num - 1;
        if (nums[idx] < 0)
            result.push(num);
        nums[idx] *= -1;
    }
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1] )); //[4,3,2,7,8,2,3,1]
