/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let obj = {};
    let n = nums.length;

    for(var x of nums) obj[+x] = 1;
    
    for(let j=0; j<n; j++){
            let num = +(nums[j].toString().split("").reverse().join(""))
            obj[num] =1
    }
    return Object.keys(obj).length ;
};
console.log(countDistinctIntegers([1,13,10,12,31])); // 6