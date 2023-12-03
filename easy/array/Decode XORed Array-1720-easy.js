/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
   const len = encoded.length + 1;
   const arr = new Array(len);
   arr[0] = first;

   for (let i = 1; i < len; i++) {
       arr[i] = encoded[i - 1] ^ arr[i - 1];
   }
   return arr;
};
const result = decode([1,2,3], 1);
console.log(result); //[ 1, 0, 2, 1 ]
