/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let x = 1;
    nums.sort((a, b) => a-b);
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == x) x++;
    }
    return x;
};
console.log(firstMissingPositive([3,4,-1,1])); // 2