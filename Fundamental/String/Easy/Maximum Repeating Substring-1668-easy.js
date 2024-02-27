/**
 * @param {sequenceing} sequence
 * @param {sequenceing} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0;
  let wordConcat = word;
  while (sequence.includes(wordConcat)) {
    wordConcat += word;
    count++;
  }
  return count;
};

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")); // 5
