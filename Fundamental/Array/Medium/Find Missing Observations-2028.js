/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const rollCount = rolls.length + n,
        mRollsSum = rolls.reduce((a, b) => a + b, 0),
        nRollsSum = mean * rollCount - mRollsSum
    
    if (nRollsSum > 6 * n || nRollsSum < n) return []
    const minDice = Math.floor(nRollsSum / n),
        maxDiceCount = nRollsSum - minDice * n
    return [].concat(Array(maxDiceCount).fill(minDice + 1), Array(n - maxDiceCount).fill(minDice))
};

console.log(missingRolls([3, 2, 4, 3], 4, 2)); // [6, 6]