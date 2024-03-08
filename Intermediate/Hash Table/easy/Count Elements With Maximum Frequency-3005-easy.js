/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxFreq = 0, countMaxFreq = 0, hashMap = {};
    for (let num of nums) {
        hashMap[num] = (hashMap[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, hashMap[num]);
    }

    for (let key in hashMap) {
        if (hashMap[key] === maxFreq) countMaxFreq += hashMap[key];
    }  
    return countMaxFreq;
 };   
console.log(maxFrequencyElements([1,2,2,3,1,4])); // 4
console.log(maxFrequencyElements([1,2,4,5])); // 4

/* 
{
    1: 2,
    2: 2,
    3:1,
    4:1
}
 */