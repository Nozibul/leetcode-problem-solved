/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const decode = Array(s.length+1).fill(0);
    decode[s.length] = 1 ;
    for(let i = s.length-1; i>=0; i--){
        if(s[i]!=='0'){
            decode[i] = decode[i+1]
            if(s[i]+s[i+1]<=26) decode[i]+=decode[i+2]
        }
    }
    return decode[0];
};

const result = numDecodings("12");
console.log(result); // 2