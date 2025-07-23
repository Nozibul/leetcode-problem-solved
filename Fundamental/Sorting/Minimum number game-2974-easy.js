/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums){
    nums.sort((a, b) => a - b);

    const newArr = [];

    for(let i = 0; i < nums.length-1; i+=2){
        newArr.push(nums[i+1], nums[i]);
    }
    return newArr;
};

console.log(numberGame([5,4,2,3])); // [3,2,5,4]
console.log(numberGame([4, 7, 6])); 
