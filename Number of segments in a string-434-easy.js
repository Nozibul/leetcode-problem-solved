/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   return s.split(" ").length ;
};
const result = countSegments("Hello, my name is John");
console.log(result);