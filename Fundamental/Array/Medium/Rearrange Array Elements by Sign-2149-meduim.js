/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pi = 0;
    let ni = 1;
    let res = new Array(nums.length).fill(0);

    for (let n of nums) {
        if (n > 0) {
            res[pi] = n;
            pi += 2;
        } else {
            res[ni] = n;
            ni += 2;
        }
    }

    return res;    
};

console.log(rearrangeArray([3,1,-2,-5,2,-4])); // [3,-2,1,-5,2,-4]