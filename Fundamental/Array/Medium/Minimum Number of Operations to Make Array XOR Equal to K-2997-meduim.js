/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
     return (
          (nums.reduce((acc, cur) => acc ^ cur, 0) ^ k).toString(2).split("1")
               .length - 1
     );
};
console.log(minOperations([2, 1, 3, 4], 1)); // 2
