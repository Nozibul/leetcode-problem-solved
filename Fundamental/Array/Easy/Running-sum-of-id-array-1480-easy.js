/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {

        if(typeof res[0] === "undefined")res.push(nums[i]);
        else res.push(res[i-1] + nums[i]);
    }
    return res ;
};
const result = runningSum([1,1,1,1,1]);
console.log(result);