/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // East, South, West, North
    const result = [[rStart, cStart]];
    let steps = 0, d = 0;
    
    while (result.length < rows * cols) {
        if (d % 2 === 0) steps++;
        
        for (let i = 0; i < steps; i++) {
            rStart += directions[d][0];
            cStart += directions[d][1];
            
            if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                result.push([rStart, cStart]);
            }
            
            if (result.length === rows * cols) return result;
        }
        
        d = (d + 1) % 4;
    }
    
    return result;
};
console.log(spiralMatrixIII(5, 6, 1, 4)); 
// [[1, 4], [1, 5], [1, 6], [2, 6], [3, 6], [3, 5], [3, 4], [3, 3], [2, 3], [1, 3], [1, 2], [1, 1]]