/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function(nums, maximumBit) {
    let xor = (1 << maximumBit) - 1 ;

    for(let i=0; i<nums.length; i++){
        xor ^= nums[i]
        nums[i] = xor
    }
    return nums.reverse();
};

console.log(getMaximumXor([0,1,1,3], 2)); // [0,3,2,3]