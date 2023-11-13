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
console.log(result);
/*
If manually perform the rotations and observe the results, 
we may notice a pattern. For example, for s = "abcde", the rotations
would be: "bcdea", "cdeab", "deabc", "eabcd", and back to "abcde". 

Noticing patterns and forming insights: From the examples, 
we might notice that all the rotated strings are substrings
 of s + s = "abcdeabcde". Thus, we can check if goal is a substring
 of s + s to see if s can be rotated to form goal.


*/