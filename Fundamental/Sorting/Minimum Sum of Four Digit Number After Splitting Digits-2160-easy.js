/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {

    const arr = num.toString().split('').sort() 
    console.log(arr);
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])

};
console.log(minimumSum(2932)); // 52
console.log(minimumSum(2410)); // 53