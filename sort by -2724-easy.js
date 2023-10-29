/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
   return arr.sort((a, b)=> fn(a) - fn(b)) ;
};

const arrays = sortBy([4,2,3], (a, b) => {
  
});
console.log(arrays);

