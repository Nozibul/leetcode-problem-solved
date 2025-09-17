/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
    // Edge case: 
    if(nums.length === 0) return [];

    // Variables to hold the result array and the next even and odd indices
    let result = new Array(nums.length);
    let evenInd = 0;
    let oddInd = 1;

    // Main loop to place numbers in the correct positions
    for (let num of nums) {
        if (num % 2 === 0) {      
            result[evenInd] = num;
            evenInd += 2;
        } else {                   
            result[oddInd] = num;
            oddInd += 2;
        }
    }

    // Return the sorted array
    return result;
}

console.log(sortArrayByParityII([2,4,5,7])); // [2,5,4,7]
console.log(sortArrayByParityII([2,3])); // [2,3]