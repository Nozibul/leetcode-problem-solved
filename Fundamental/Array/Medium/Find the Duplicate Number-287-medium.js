/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   
    for (let i = 0; i < nums.length; i++) {
        let ind = Math.abs(nums[i]);
        if (nums[ind] < 0) {
            return ind;
        }
        nums[ind] = -nums[ind];
    }
    return -1;
};
console.log(findDuplicate([3,1,3,4,2])); // 3