/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    const pairs = [];
    
    for (let i = 0; i < Math.floor(nums.length/2); i++){
        pairs.push(nums[i] + nums[n-i-1]);
    }
    
    return Math.max(...pairs);
};
console.log(minPairSum([3,5,2,3])); // 7
console.log(minPairSum([3,5,4,2,4,6])); // 8
/* 
The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.
*/