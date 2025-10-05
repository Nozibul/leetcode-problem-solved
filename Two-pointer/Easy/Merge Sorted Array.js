/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //Edg case If nums2 is empty, nothing to do
    if (m === 1) return nums1;
    if (n === 1) return nums2;

    // Start merging from the end
    let endIdx = nums1.length - 1;

    // Merge while both arrays have elements
    while (0 < m && 0 < n) {
        if (nums1[m - 1] <= nums2[n - 1] ) {
            nums1[endIdx] = nums2[n - 1];
            n--;
        } else {
            nums1[endIdx] = nums1[m - 1];
            m--;
        }
        endIdx--;
    }

    // If nums2 still has elements left, copy them
    // while (n > 0) {
    //     nums1[endIdx] = nums2[n - 1];
    //     n--;
    //     endIdx--;
    // }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]