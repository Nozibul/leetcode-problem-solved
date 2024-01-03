
/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function(nums) {
  const product = nums.reduce((acc, curr)=> acc * curr, 1);
  return signFunc(product);
};

const signFunc = function(x) {
    if (x > 0) return 1;
    else if (x < 0) return -1;
    else return 0;
};

const result = arraySign([-1, -2, -3, -4, 3, 2, 1]);
console.log(result); // Output: 1
