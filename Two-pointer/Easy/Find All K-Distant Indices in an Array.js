function findKDistantIndicesBest(nums, key, k) {
    const result = [];
    
    // Find all key positions and create intervals
    const intervals = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            let start = Math.max(0, i - k);
            let end = Math.min(nums.length - 1, i + k);
            intervals.push([start, end]);
        }
    }
    
    if (intervals.length === 0) return result;
    
    // Merge overlapping intervals
    intervals.sort((a, b) => a[0] - b[0]);
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currentEnd + 1) {
            // Overlapping or adjacent intervals
            currentEnd = Math.max(currentEnd, intervals[i][1]);
        } else {
            // Add current interval to result
            for (let j = currentStart; j <= currentEnd; j++) {
                result.push(j);
            }
            currentStart = intervals[i][0];
            currentEnd = intervals[i][1];
        }
    }
    
    // Add last interval
    for (let j = currentStart; j <= currentEnd; j++) {
        result.push(j);
    }
    
    return result;
}

// Test cases
console.log(findKDistantIndices([3,4,9,1,3,9,5], 9,1)); // [1,2,3,4,5,6]