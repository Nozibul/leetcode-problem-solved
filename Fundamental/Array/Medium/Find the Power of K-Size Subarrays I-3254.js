/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultsArray = function (nums, k) {
    const result = []; 
    function isConsecutiveAndSorted(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
          return false;
        }
      }
      return true;
    } 
    for (let i = 0; i <= nums.length - k; i++) {
      const subarray = nums.slice(i, i + k);
      if (isConsecutiveAndSorted(subarray)) {
        result.push(Math.max(...subarray));
      } else {
        result.push(-1);
      }
    } 
    return result;
  };

  console.log(resultsArray([1,2,3,4,3,2,5], 3)); //  [3,4,-1,-1,-1]