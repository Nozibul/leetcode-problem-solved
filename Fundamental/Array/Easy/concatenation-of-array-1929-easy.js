/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(...nums);
};
const result = getConcatenation([1,3,2,1]);
console.log(result);