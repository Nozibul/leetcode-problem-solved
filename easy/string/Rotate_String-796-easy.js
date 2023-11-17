/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
   let subStr ;
   if(!(s.length === goal.length)) return false;
   else subStr = s + s ;

   if(subStr.includes(goal)) return true;
   else return false;
  
};
const result = rotateString("abcde", "cdeaba");
console.log(result); // false
/*
Noticing patterns and forming insights: From the examples, 
we might notice that all the rotated strings are substrings
 of s + s = "abcdeabcde". Thus, we can check if goal is a substring
 of s + s to see if s can be rotated to form goal.


*/