function minimumAverage(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let min = 50

    for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
        const avg = (nums[i] + nums[nums.length - 1 - i]) / 2
        min = Math.min(min, avg)
    }
    return min;
};
console.log(minimumAverage([1,9,8,3,10,5])); // 5.5