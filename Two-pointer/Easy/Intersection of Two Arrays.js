/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Edge case: if either array is empty, return an empty array
    if(nums1.length === 0 || nums2.length === 0) return [];

    // Sort both arrays to enable two pointer technique
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    // Variables name with miningful name
    let left = 0;
    let right = 0;
    const result = new Set();

    // Main logic using two pointer technique
    while(left < nums1.length && right < nums2.length){
        if(nums1[left] === nums2[right]){
            result.add(nums1[left]);
            left++;
            right++;
        } else if(nums1[left] < nums2[right]){
            left++
        } else right++;
    }
    return [...result];
    
};
console.log(intersection([1,1,2,2], [2,2])); // [2]
console.log(intersection([3,9,8,5], [9,4,9,8,5])); // [5,8,9]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [4,9]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 = new Set(nums1);
    let arr2 = new Set(nums2);
    return [...arr1].filter(x => arr2.has(x)); 
};