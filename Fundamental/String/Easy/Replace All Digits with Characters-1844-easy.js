/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = '' ;

    for(let i = 0; i < s.length; i++){    
        if(i % 2 !== 0){
          result += String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]))
        } else result += s[i]
    }
    return result;
};
console.log(replaceDigits( "a1b2c3d4e")); // "abbdcfdhe"