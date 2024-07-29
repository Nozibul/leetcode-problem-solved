/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var addedInteger = function(nums1, nums2) {
    return Math.max(...nums2)-Math.max(...nums1);
};
console.log(addedInteger([1,2,3] , [9, 7, 5])); // 3