/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxLength = 0;

    for (let i = 0; i < sentences.length; i++) {
        if(sentences[i].split(" ").length > maxLength) maxLength = sentences[i].split(" ").length ;  
    };
    return maxLength;
};
const result = mostWordsFound(["please wait", "continue to fight", "continue to win"]);
console.log(result);