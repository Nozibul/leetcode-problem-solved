/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (num) {
  let index = [];

  for (let i = 0; i <= num; i++) {
    index.push(Number(i).toString(2).replace(/0/g, "").length);
  }
  return index;
};
const result = countBits(5);
console.log(result); // [0,1,1,2,1,2]
