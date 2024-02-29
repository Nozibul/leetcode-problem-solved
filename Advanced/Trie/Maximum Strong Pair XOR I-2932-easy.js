/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumStrongPairXor = (nums) => {
    let max = 0;
  
    for (let i = 0; i < nums.length; i += 1) {
      for (let j = i + 1; j < nums.length; j += 1) {
        if (Math.abs(nums[i] - nums[j]) > Math.min(nums[i], nums[j])) continue;
        max = Math.max(max, nums[i] ^ nums[j]);
      }
    }
    return max;
  };
  console.log(maximumStrongPairXor([1,2,3,4,5])); //7