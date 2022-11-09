
const makeGood = function(s) {
// ASCII 
// a = 97
// A = 65
    for(let i = 0; i < s.length - 1; i++){
       if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32){
         newStr = s.slice(0, i) + s.slice(i + 2); 
         return makeGood(newStr); // ''
       }
    }
    return s ; // ''
                                        
};
console.log(makeGood('Pp')) ;