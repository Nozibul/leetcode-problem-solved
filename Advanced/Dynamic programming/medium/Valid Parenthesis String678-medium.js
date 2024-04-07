/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack=[]
    let star=[]
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='(') stack.push(i)
        else if(s[i]=='*') star.push(i)
        else{
            if(stack.length) stack.pop()
            else if(star.length) star.pop()
            else return false
        }
    }
    
    while(stack.length&&star.length){
        if(stack.pop()>star.pop()) return false
    }
    return stack.length==0
};
console.log(checkValidString("()")); // true
console.log(checkValidString("(*)")); // true