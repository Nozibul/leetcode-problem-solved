/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // Edge case
    if (nums.length === 0) return nums;

    // Step 1: Apply operation
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    // Step 2: Shift non-zero elements to the left
    let result = new Array(nums.length).fill(0);
    let index = 0;

    for (let num of nums) {
        if (num !== 0) {
            result[index++] = num;
        }
    }

    return result;
};

console.log(applyOperations([1,2,2,1,1,0])); // [1,4,2,1,0,0]
