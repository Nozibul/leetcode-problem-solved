/**
 * @param {s} order
 * @param {s} s
 * @return {s}
 */
var customSortString = function(order, s) {
    const hashTable = {};

    for (let i = 0; i < order.length; i++) {
        hashTable[order[i]] = i;
        
    }

    // Initialize remaining characters in s with Infinity
    for (let char of s) {
        hashTable[char] = hashTable[char] ?? Infinity;
    }
 
    // Sort characters in s based on custom order
    return s.split("").sort((a, b) => hashTable[a] - hashTable[b]).join("");
    
};
console.log(customSortString("cba", "abcd")); // "cbad"

