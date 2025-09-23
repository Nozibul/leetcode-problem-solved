/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Edge case: if the array is empty, return 0
    if (nums.length === 0) return 0;

    //Meaningful variable names
    let slow = 1; 

    // Slow-Fast Approach
    for (let fast = 0; fast < nums.length -1; fast++) {
        if (nums[fast] !== nums[fast+1] ) {
             nums[slow] = nums[fast + 1];
             slow++;
         }
    }
    return slow;

};
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5