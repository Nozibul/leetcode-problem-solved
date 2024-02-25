/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const size  = arr.length / 4 ; 
    let count = 1; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            count = 0;
        }
        count++
        if (count > size) {
            return arr[i];
        }
    };
};
const result = findSpecialInteger([1,1,2,2,3,3,3,3]);
console.log(result);