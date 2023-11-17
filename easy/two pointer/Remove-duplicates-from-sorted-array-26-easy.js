/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let ind = 1;
       for(let i = 0; i < nums.length-1; i++){
          if(nums[i] !== nums[i+1]){
              nums[ind] = nums[i+1]
              ind++ ;
          }
      }
      return ind;
  };
  removeDuplicates([1,1,2,3]);
  