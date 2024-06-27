/**
 * @param {string} s
 * @return {number}
 */
function partitionString(s) {
    let partitionCount = 1; // Start with one partition
    let seenCharacters = 0; // Bitmask to track seen characters
    
    for (let i = 0; i < s.length; i++) {
      let charBit = 1 << (s.charCodeAt(i) - 97); // Bit position for the current character
  
      // If the character has been seen in the current partition
      if (seenCharacters & charBit) {
        seenCharacters = 0; // Reset the seen characters bitmask
        partitionCount++;   // Increment the partition count
      }
  
      seenCharacters |= charBit; // Mark the character as seen
    }
    return partitionCount;
  }
console.log(partitionString("abacaba")); // 4
/* 
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
*/