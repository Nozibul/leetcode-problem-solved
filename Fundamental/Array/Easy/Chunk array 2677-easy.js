/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const newArray = [];
    let i = 0;
    let newSize = size ;
    while( i < arr.length ) {
        newArray.push(arr.slice(i, newSize));
        i +=size ; // 2, 4
        newSize += size ; // 4, 6
     
    }
    return newArray;
};

const isChunk = chunk([1,2,3,4,5], 2);
console.log(isChunk); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]