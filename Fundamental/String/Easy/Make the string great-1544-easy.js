/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let st=[''];

    for(let char of s){
        let top = st[st.length-1]
        if(char!==top && char.toLowerCase() == top.toLowerCase()) st.pop()
        else st.push(char)
    }
    return st.join('')
};


console.log(makeGood("leEeetcode")); // "leetcode"