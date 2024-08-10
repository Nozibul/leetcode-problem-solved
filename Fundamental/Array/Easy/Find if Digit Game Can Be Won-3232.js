/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum = 0, doubleSum = 0;
    for (let num of nums) {
        if (num < 10) {
            singleSum += num;
        } else {
            doubleSum += num;
        }
    }
    return singleSum != doubleSum;
};
console.log(canAliceWin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
console.log(canAliceWin([1, 2, 3, 4, 10])); // false