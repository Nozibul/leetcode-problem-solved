/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 = new Set(nums1);
    let arr2 = new Set(nums2);
    
    return [...arr1].filter(x => arr2.has(x));    console.log(intersectionResult);
};
console.log(intersection([1, 2, 2, 1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));