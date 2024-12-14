/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let result = 0;
    let left = 0; // left pointer for sliding window
    
    // Deque to keep track of the minimum and maximum values in the window
    let minDeque = [];
    let maxDeque = [];

    for (let right = 0; right < nums.length; right++) {
        // Maintain the max deque: values in decreasing order
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain the min deque: values in increasing order
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // If the window is invalid, move the left pointer
        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            left++;
            if (minDeque[0] < left) minDeque.shift();
            if (maxDeque[0] < left) maxDeque.shift();
        }

        // The number of subarrays ending at `right` and starting from any index `i` in the range [left, right]
        result += right - left + 1;
    }

    return result;
};
console.log(continuousSubarrays([1,2,3])); // 6
console.log(continuousSubarrays([5,4,2,4])); // 8