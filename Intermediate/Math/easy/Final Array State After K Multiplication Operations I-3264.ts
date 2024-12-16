function getFinalState(nums: number[], k: number, multiplier: number): number[] {

    for(let i=0;i<k;i++){

        let min = Math.min(...nums)
        let index = nums.indexOf(min)
        nums[index] = nums[index] * multiplier ;
    }
    return nums;
};
console.log(getFinalState([2,1,3,5,6] ,5, 2)); // [8,4,6,5,6]