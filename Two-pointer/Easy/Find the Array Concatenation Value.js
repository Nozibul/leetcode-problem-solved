const findTheArrayConcVal = nums => {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  // Initialize pointers and output with meaning variable name
  let output = 0;
  let left = 0;
  let right = nums.length - 1;

  // Loop  pointers meet or cross
  while (left <= right) {
    output += Number(left === right ? nums[left] : `${nums[left]}` + `${nums[right]}`);
    left++;
    right--;
  }
  // Return the final concatenation value
  return output;
};

console.log(findTheArrayConcVal([5,14,13,8,12])); // 673