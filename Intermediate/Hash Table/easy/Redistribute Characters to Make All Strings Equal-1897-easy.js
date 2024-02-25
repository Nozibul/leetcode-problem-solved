/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let counts = new Map();
    
    for (let word of words) {
        for (let c of word) {
            counts.set(c, (counts.get(c) || 0) + 1);
        }
    }
    
    let n = words.length;
    for (let val of counts.values()) {
        if (val % n !== 0) {
            return false;
        }
    }
    
    return true;
};
const result = makeEqual(["abc","aabc","bc"]);
console.log(result); // true