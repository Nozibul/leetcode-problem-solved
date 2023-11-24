/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i +=2) {
        res.push(...Array(nums[i]).fill(nums[i+1]));
    };
    return res;
};

const result  = decompressRLElist([1,2,3,4]);
console.log(result); //

/*
console.log(Array(3).fill(4)); // [4, 4, 4]


*/