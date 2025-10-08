/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // Edge case
  if(haystack.length === 0 && needle.length === 0) return 0;

  // Return the index of the first occurrence of needle in haystack
  return haystack.indexOf(needle);
};
console.log(strStr("hsllo", "ll")); // 2
console.log(strStr("sadbutsad", "sad")); // 0

