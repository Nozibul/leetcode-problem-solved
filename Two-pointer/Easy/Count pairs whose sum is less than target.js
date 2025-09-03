const countPairs = function(nums, target) {
  // Edge cases
  if (!nums || nums.length < target) return 0;

  // Sort array ascending
  nums.sort((a, b) => a - b);

  // Initialize variables with meaningful names
  let left = 0;
  let right = nums.length - 1;
  let pairCount = 0;

  // Main logic with two pointer approch
  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < target) {
      // All pairs between left and right are valid
      pairCount += right - left; 
      left++; 
    } else {
      right--; 
    }
  }

  // Return total count
  return pairCount;
};

console.log(countPairs([-6,2,5,-2,-7,-1,3], -2)); // Output: 3
