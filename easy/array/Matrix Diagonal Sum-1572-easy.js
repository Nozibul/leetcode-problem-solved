/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0, len = mat.length;
    for(let i=0; i<len; i++){
        sum += mat[i][i] + mat[len-i-1][i];
    }
    return len % 2 == 0 ? sum : sum-mat[Math.floor(len/2)][Math.floor(len/2)];
};
const result  = diagonalSum([[1,2,3],[4,5,6],[7,8,9]]);
console.log(result); // 25