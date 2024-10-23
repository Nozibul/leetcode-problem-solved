/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let count = [0, 0, 0];

    for (let num of nums) {
        count[num]++;
    }
    
    let i = 0;
    for (let color = 0; color < count.length; color++) {
        for (let j = 0; j < count[color]; j++) {
            nums[i] = color;
            i++;
        }
    }
    
};
console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]