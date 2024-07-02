function maximumXOR(nums: number[]): number {
    return nums.reduce((a, b) => a |= b, 0);
};
console.log(maximumXOR([3,2,4,6])); // 7