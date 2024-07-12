
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj={}
    for(let i of s) obj[i]=obj[i]+1||1
    return new Set(Object.values(obj)).size==1
};
console.log(areOccurrencesEqual("abacbc")); // true   
console.log(areOccurrencesEqual("aaabb")); // false   