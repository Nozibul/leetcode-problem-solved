/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const hash = {};

    for (const num of arr) {
        hash[num] = (hash[num] || 0) + 1;
    }

    const keyVals = Object.entries(hash);

    keyVals.sort((a, b) => a[1] - b[1]);

    let count = keyVals.length;
    let i = 0;

    while (k > 0 && i < keyVals.length) {
        const freq = keyVals[i][1];
        const remove = Math.min(freq, k);
        
        k -= remove;
        count -= remove === freq ? 1 : 0;
        i += remove === freq ? 1 : 0;
    }

    return count;
};

console.log(findLeastUniqueIntegers([4, 3, 1, 1, 3, 3, 2], 3)); // Output: 2

