/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {

    if(a.match(b)){
        return -1;
    } 
    return Math.max(a.length, b.length)
};

const result = findLUSlength("aaa", "bbbb");
console.log(result);
