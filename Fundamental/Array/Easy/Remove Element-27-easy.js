/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let ans = 0 ;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val){
        nums[ans] = nums[i]; // 3
        ans++ ;
    }
  }
  return ans ;
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))