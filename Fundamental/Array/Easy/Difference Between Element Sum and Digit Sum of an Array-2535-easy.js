/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
   let  digitsSum = 0 ;
    const sum = nums.reduce((acc, curr)=> acc + curr ,0); // 25

    let digitSum = nums.reduce(function (acc, value) {
      digitsSum = 0;

      while(value){
        digitsSum += value % 10;
          value = Math.floor(value / 10);
      }
      return acc + digitsSum
  }, 0);

  return Math.abs(sum - digitSum);
};
const result = differenceOfSum([1,15,6,3]);
console.log(result);