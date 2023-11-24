/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {

    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      let binary = i.toString(2).replaceAll("0", "");
      if (binary.length === k) sum += nums[i];
    
    };
    console.log(sum);
    return sum ;
  };

const result = sumIndicesWithKSetBits([5,10,1,5,2], 1);
console.log(result); // 13