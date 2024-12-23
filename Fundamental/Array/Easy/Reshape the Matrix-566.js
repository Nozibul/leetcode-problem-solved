/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flat = mat.flat()
    if (flat.length !== r*c) return mat;
    return [...Array(r)].map(() => flat.splice(0,c)) 
};
console.log(matrixReshape([[1,2],[3,4]], 1, 4)) ; // [[1,2,3,4]]