/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let result = [];

    // initialize function checkArithmetic(arr) with arr as argument
    function checkArithmetic(arr) {

        // sort the array in ascending order
        arr.sort((a, b) => a - b);

        // find the diffrence between 1st index and oth index element in arr
        let diff = arr[1] - arr[0];

        for (let j = 1; j < arr.length - 1; j++) {

            // if difference between j+1th index and jth index 
            // is not equal to diff then return false
            if (arr[j + 1] - arr[j] !== diff) return false;
        }
        return true;
    }

    // m range queries: run for loop from 0th index to lengh of array l
    for (let i = 0; i < l.length; i++) {

        // find subarray from array nums using slice() 
        // and range are ith index of array l and array r + 1
        let arr = nums.slice(l[i], r[i] + 1);

        // invoke checkArithmetic(arr) with argument as arr 
        // and push return value in array result
        result.push(checkArithmetic(arr));
    }
    return result;
};

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])); 
//  [true,false,true]