/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverage = function(nums) {
    // Edge case - if nums is empty, return 0
    if (!nums || nums.length === 0) return 0; 

    // Sort array in ascending order
    nums.sort((a, b) => a - b);

    // Better initialization with meaningful names
    let left = 0;
    let right = nums.length - 1;
    let minAverage = Infinity; 

    // Main logic using two pointers
    while (left < right) {
        const currentAverage = (nums[left] + nums[right]) / 2;
        
        // Simplified minimum tracking
        minAverage = Math.min(minAverage, currentAverage);
        
        left++;
        right--;
    }
    
    // return statement
    return minAverage;
};

// Test cases
console.log(minimumAverage([1,9,8,3,3,4])); // Output: 3.5
console.log(minimumAverage([1,2,3,3])); // Output: 2
console.log(minimumAverage([5,5,5,5])); // Output: 5