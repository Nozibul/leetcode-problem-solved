/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function(s) {
    let left = 0;
    let right = (s.match(/1/g) || []).length;
    // console.log(right); // 4
   
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        s[i] === '0' ? left++ : right--;
        max = Math.max(max, left + right);
    }
    return max;
};
const result = maxScore("1111");
console.log(result); // 5

