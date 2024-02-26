/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count  = 0;
    words.forEach((word)=>{
        console.log(word);
        if(word.startsWith(pref)) count++
    })
    return count ;
};


var prefixCount = function(words, pref) {
    const regex = new RegExp('^' + pref);
    return words.filter(word => regex.test(word)).length;
};

console.log(prefixCount(["pay","attention","practice","attend"], "at")); // 2
console.log(prefixCount(["leetcode","win","loops","success"], "code")); //0