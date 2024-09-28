function singleNumber(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0)
};
console.log(singleNumber([2,2,1])); // 1 
console.log(singleNumber([4,1,2,1,2])); // 4 