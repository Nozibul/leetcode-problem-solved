/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (availableMemoryBits1, availableMemoryBits2) {
    let i = 1;
  
    while (1) {
      // i bits are taken from  the bigger of the  availableMemoryBits
      if (availableMemoryBits1 >= availableMemoryBits2) {
        if (availableMemoryBits1 < i) break //  not enough bits   to take
        availableMemoryBits1 -= i; //           take it
      } else {
        if (availableMemoryBits2 < i) break //  not enough bits   to take
        availableMemoryBits2 -= i; //           take it
      }
      i++
    }
    return [i, availableMemoryBits1, availableMemoryBits2];
  };
  console.log(memLeak(2, 2)); // [3, 1, 0]