/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
// Edge Case: If the input array is null or has less than 2 elements, return an empty array.
if (!nums || nums.length < 2) return [];

// Create a map to store the numbers and their indices.
const map = new Map();

for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; 
    if (map.has(complement)) {
        return [map.get(complement), i];
    }
    map.set(nums[i], i);
}
 // If no solution is found, return an empty array.
return [];   
};
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]