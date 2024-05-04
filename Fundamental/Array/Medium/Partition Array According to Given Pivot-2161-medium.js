/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less = []
    let greater = []
    let same = []
    for(let num of nums) {
        if(num < pivot) {
            less.push(num)
        } else if (num > pivot) {
            greater.push(num)
        } else {
            same.push(num)
        }
    }
    return [...less, ...same, ...greater]
};

console.log(pivotArray([-3,4,3,2], 2)); // [-3,2,4,3]