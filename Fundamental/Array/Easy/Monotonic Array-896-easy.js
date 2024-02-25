/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
    
    for (let i = 1; i < nums.length; i++) {
        increasing = increasing && (nums[i] >= nums[i-1]);
        decreasing = decreasing && (nums[i] <= nums[i-1]);
    }
    return increasing || decreasing;
}



console.log(isMonotonic([1, 2, 3, 4, 5]));  
console.log(isMonotonic([5, 4, 3, 2, 1])); 

