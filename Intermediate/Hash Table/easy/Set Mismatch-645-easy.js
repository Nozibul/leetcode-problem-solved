var findErrorNums = function(nums) {
    let total = (1 + nums.length) * nums.length / 2;
    let m = new Map(), sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) var repeating = nums[i];
        else m.set(nums[i], 1);
        sum += nums[i];
    }
    let missing = total - (sum-repeating);
    return [repeating, missing];
};
console.log(findErrorNums([1,2,2,4])); // [2, 3]