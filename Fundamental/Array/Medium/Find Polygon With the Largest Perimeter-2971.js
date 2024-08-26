const largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b); // Sorting the array in non-decreasing order

    let maxPerimeter = -1; // Initializing maxPerimeter to a non-positive value
    let curSum = 0; // Initializing the current sum to 0
    
    for(let i = 0; i < nums.length; i++) {
        if(i >= 2 && curSum > nums[i]) { // Checking if a valid triplet is found
          maxPerimeter = curSum + nums[i]; // Updating maxPerimeter
        }
        curSum += nums[i]; // Updating the current sum
    }

    return maxPerimeter; // Returning the maximum perimeter found
};

console.log(largestPerimeter([2,1,2])); // 5
console.log(largestPerimeter([1,2,1])); // 0