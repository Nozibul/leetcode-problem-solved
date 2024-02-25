/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let indexStr = [] ;
    for (let i = 0; i < words.length; i++) {
       if(words[i].match(x)) indexStr.push(i);        
    }
    return indexStr;
};
const result = findWordsContaining(["abc","","aaaa","cbc"], "a");
console.log(result); // [0, 2]