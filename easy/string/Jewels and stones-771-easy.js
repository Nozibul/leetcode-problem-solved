/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const regex = new RegExp(`[${jewels}]`, 'g');
    const matches = stones.match(regex);
    return matches ? matches.length : 0;
};

const result = numJewelsInStones("aA", "aAAbbb");
console.log(result);  // Output should be 3

