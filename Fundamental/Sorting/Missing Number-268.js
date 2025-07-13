/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        res += i - nums[i];
    }

    return res;
};
console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8