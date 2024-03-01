/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let sortStr = s.split("").sort((a, b) => b - a);
    let firstEle = sortStr.shift();

    sortStr.push(firstEle)
    return sortStr.join("")
};
console.log(maximumOddBinaryNumber("0101")); //"1001"