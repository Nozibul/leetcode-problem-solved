/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let set = new Set(nums);
  const myArray = Array.from(set);
  return myArray.sort((a, b) => b - a).length < 3 ? myArray[0] : myArray[2];
};
console.log(thirdMax([3,2,1])); // 1
console.log(thirdMax([3,34,3,2,1])); 