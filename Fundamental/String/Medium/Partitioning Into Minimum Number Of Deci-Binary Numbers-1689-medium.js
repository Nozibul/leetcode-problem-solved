/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = n => Math.max(...n);

console.log(minPartitions("82734")); //  8
console.log(minPartitions("32")); ///Explanation: 10 + 11 + 11 = 3