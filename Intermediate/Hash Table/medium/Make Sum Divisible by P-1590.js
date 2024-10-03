var minSubarray = function (nums, p) {
  let n = nums.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    total = (total + nums[i]) % p;
  }
  if (total === 0) return 0;

  let map = new Map([[0, -1]]);
  let sum = 0;
  let result = n;

  for (let i = 0; i < n; i++) {
    sum = (sum + nums[i]) % p;
    let prev = (sum - total + p) % p;
    if (map.has(prev)) {
      result = Math.min(result, i - map.get(prev));
    }
    map.set(sum, i);
  }
  return result === n ? -1 : result;
};

console.log(minSubarray([3, 1, 3, 6, 2], 3)); // 2
console.log(minSubarray([3, 1, 5, 4, 2], 3)); // 2