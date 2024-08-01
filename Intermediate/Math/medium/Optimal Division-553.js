/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length === 1) {
        return nums[0].toString();
    }
    if (nums.length === 2) {
        return nums[0] + "/" + nums[1];
    }
    let result = nums[0] + "/(" + nums.slice(1).join("/") + ")";
    return result;
};
console.log(optimalDivision([1000, 100, 10, 2])); // "1000/(100/10/2)"
    s