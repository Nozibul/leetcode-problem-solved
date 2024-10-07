/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {

    for(let i=0; i<s.length; i++){
        while(s.includes('AB') || s.includes('CD')){
            if(s.includes('AB')) s = s.replace('AB','');
            if(s.includes('CD')) s = s.replace('CD','');
        }
    };
    return s.length;
};
console.log(minLength("a")); // 1
console.log(minLength("aa")); // 2
console.log(minLength("aab")); // 2