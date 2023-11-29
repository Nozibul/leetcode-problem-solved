/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const [ res, res2]= nums.reduce((acc, curr)=>{
      console.log( curr);
      return acc + curr ;
    }, [0 ,0])
  console.log(res2);
};
const result = differenceOfSum([1,15,6,3]);
console.log(result);