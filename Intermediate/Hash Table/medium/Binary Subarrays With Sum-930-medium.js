/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = {};
    count[0] = 1;
    
    let currSum = 0;
    // Initialize total subarrays count
    let totalSubarrays = 0;

    for (let num of nums) {
        currSum += num;
        
        // If there exists a subarray with sum (currSum - goal), 
        if (count[currSum - goal]) {
            totalSubarrays += count[currSum - goal];
        }
        
        count[currSum] = (count[currSum] || 0) + 1;
        // if (count[currSum])  count[currSum]++;
        // else  count[currSum] = 1;
        
    }
    return totalSubarrays;
};

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // Output: 4
