/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newStr = [];

    for (let i = 0; i < nums.length; i++){
        newStr.push(nums[nums[i]]);
    
    }
    return newStr;
};
const result = buildArray([0,2,1,5,3,4]);
console.log(result);