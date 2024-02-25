/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let acronym = "";
    for (let i = 0; i < words.length; i++) {
       acronym += words[i].charAt(0);        
    }
    if(acronym === s) return true ;
    return false;
};
const result = isAcronym(["an","apple"], "a");
console.log(result); // false