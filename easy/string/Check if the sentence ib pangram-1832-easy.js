/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let s = new Set();
    
    for(let i = 0; i < sentence.length; i++){
        s.add(sentence[i])
    }
    return s.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
// "leetcode" //  false