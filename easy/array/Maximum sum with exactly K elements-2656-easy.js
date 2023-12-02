/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const maxNum = Math.max(...nums);
    
    let totalMax = maxNum ;
    let maxValue = maxNum + 1 ;
    
    for(let i = 1; i<k; i++){
       totalMax +=maxValue;
       maxValue++;
    }
    return totalMax;
};
const result = maximizeSum([1,2,3,4,5], 3);
console.log(result); // 18


// another approach
var maximizeSum = function(nums, k) {
    const max = Math.max(...nums)

    return (k * (max + max + k - 1)) / 2
};
