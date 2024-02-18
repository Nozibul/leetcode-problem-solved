/**
 * @param {string[]} words
 * @return {number}
 */
const CONFIG = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var uniqueMorseRepresentations = function(words) {
    const hashmap = {};
    let output = 0;
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let code = '';
        for (let j = 0; j < word.length; j++) {
            code += CONFIG[word.charCodeAt(j) - 97];
        }
        
        if (hashmap[code] === undefined) {
            output++;
            hashmap[code] = i;
        }
    }
    return output;
};
console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"])); // 2