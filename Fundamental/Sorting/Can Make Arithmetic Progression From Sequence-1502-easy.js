/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b)=> a-b);
    const difference = arr[0] - arr[1];
    
    for (let i = 1; i < arr.length-1; i++) {
        if(difference !== (arr[i] - arr[i+1])) return false ;
    }
    return true
};
const result = canMakeArithmeticProgression([1, 2, 4]); // 1 2 5
console.log(result);
