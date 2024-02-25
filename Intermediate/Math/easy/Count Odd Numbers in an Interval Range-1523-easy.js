/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let oddCount = 0 ;
    for (let i = low; i <= high; i++) {
      if(i % 2 !== 0) oddCount++ ;
    }
    return oddCount;
};
const result = countOdds(3, 7);
console.log(result);