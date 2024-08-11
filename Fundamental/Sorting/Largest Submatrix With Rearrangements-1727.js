var largestSubmatrix = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    // Calculate heights for each column
    for (let i = 1; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    let res = 0;
    for (let i = 0; i < row; i++) {
        // Sort the heights in ascending order
        matrix[i].sort((a, b) => a - b);

        // Iterate through the sorted heights
        for (let j = 0; j < col; j++) {
            const height = matrix[i][j];
            const width = col - j;
            res = Math.max(res, height * width);
        }
    }
    return res;    
};

console.log(largestSubmatrix([[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]])); // 16