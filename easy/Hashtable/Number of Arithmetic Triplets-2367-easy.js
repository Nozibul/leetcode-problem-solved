/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    
    let hash = new Map();
    let count = 0;
    
    for(let num of nums){
        let temp = num - diff;
        
        if(hash.has(temp) && hash.has(temp - diff)){
            count++;
        }
        hash.set(num);
    }
    return count;
};
console.log(arithmeticTriplets([4,5,6,7,8,9], 2)); // 2