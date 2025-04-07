const findSubarrays = function (nums) {
  let sum = new Set();

  for (let i = 0; i < nums.length - 1; i++) {
    let total = nums[i] + nums[i + 1];
    if (sum.has(total)) return true;
    sum.add(total);
  }
  return false;
};

console.log(findSubarrays([1, 2, 3, 4, 5])); // false
console.log(findSubarrays([2, 3, 4, 1, 3])); // true
