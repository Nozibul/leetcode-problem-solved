/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // Edge case
    if(nums.length === 0 || nums.length === 1) return nums;

    // Variables with meaning name
    let left = 0;
    let right = nums.length - 1;

    // Two pointer approch
    while(left < right) {
        if(nums[left] % 2 === 0) left++;
        else {
           [nums[left], nums[right]] = [nums[right], nums[left]];
           right--;
        }
    }
  return nums;
};
console.log(sortArrayByParity([3,1,2,4,6])); //  [6,4,2,3,1] 
console.log(sortArrayByParity([0])); //  [6,4,2,3,1] 