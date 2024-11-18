/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
    let res = [];
    if (k >= 0) {
        helper(code, k, res);
    } else {
        code.reverse();
        helper(code, k * -1, res)
        res.reverse();
    }
    return res;
};

function helper(code, k, res) {
    for (let i = 0; i < code.length; i++) {
        let start = i + 1, end = i + k;
        let sum = 0;
        while (start <= end) {
            sum += code[start % code.length];
            start++
        }
        res.push(sum);
    }
}
console.log([5,7,1,4], 3); // [12,10,16,13]