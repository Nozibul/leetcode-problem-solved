/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let left = 0;
    let right = 0;

   nums1.forEach((val)=>{
        if(nums2.includes(val)) left++
    });

   nums2.forEach((val)=>{
        if(nums1.includes(val)) right++
    });
    
    return [left, right];
};
console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6])); // [3, 4]