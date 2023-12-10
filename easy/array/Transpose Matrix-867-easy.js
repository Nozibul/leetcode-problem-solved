/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    const ans = [];

    for (let j = 0; j < col; j++) {
        const temp = [];
        for (let i = 0; i < row; i++) {
            temp.push(matrix[i][j]);
        }
        ans.push(temp);
    }

    return ans;
};

// Example usage:
const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transpose(inputMatrix);
console.log(transposedMatrix);
