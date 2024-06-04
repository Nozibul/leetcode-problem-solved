/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    return nums.filter(num => num % 2 === 0).length > 1;
};
console.log(hasTrailingZeros([1,2,3,4,5])); // true
console.log(hasTrailingZeros([2,4,8,16])); // true
/* 
Explanation: If we select the elements 2 and 4, their bitwise OR is 6, which has the binary representation "110" with one trailing zero.
Other possible ways to select elements to have trailing zeroes in the 
binary representation of their bitwise OR are: 
(2, 8), (2, 16), (4, 8), (4, 16), (8, 16), (2, 4, 8), (2, 4, 16), (2, 8, 16), (4, 8, 16), and (2, 4, 8, 16).
*/