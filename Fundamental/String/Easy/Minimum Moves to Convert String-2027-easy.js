/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let count =0;
    for(let i=0;i<s.length;i++){
      if(s[i]==='X'){
         count++;
         i = i+2;
      }
    }
    return count;
};
console.log("xxx"); // 1