/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {};
    
    for (let num of nums) {  
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] >= nums.length / 2) return num;
    }
};
console.log(majorityElement([3,2,2,1,1,1,2,2])); // Output: 2
console.log(majorityElement([2, 4, 5, 6, 8, 1, 2])); // Output: 2


