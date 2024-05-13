function minOperations(nums: number[], k: number): number {
    return nums.concat(k).sort((a, b) => a - b).indexOf(k)
};
console.log(minOperations([2,11,10,1,3], 10)); // 3
/* 
Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
After two operations, nums becomes equal to [11, 10, 3].
After three operations, nums becomes equal to [11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 3 is the minimum number of operations needed so that all 
elements of the array are greater than or equal to 10.
*/