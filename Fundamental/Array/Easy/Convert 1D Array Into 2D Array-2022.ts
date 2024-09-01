function construct2DArray(original: number[], m: number, n: number): number[][] {
    const matrix: number[][] = [];

    if (original.length == m*n) {
        for (let i = 0; i < original.length; i += n) {
            matrix.push(original.slice(i, i + n));
        }
    }
    return matrix;
};
console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1, 2], [3, 4]]