/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    return Math.ceil((-1 + Math.sqrt(1 + 8 * n))/2) ;
};
console.log(twoEggDrop(2));//2
console.log(twoEggDrop(100));//14