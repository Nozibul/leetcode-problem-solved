/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function (num) {

  for (let i = num.length-1; i >= 0 ; i--) {
    if ((+num[i]) % 2 === 1) {
      return num.slice(0, i+1);
    }
  }
  return "";
};
const result = largestOddNumber("92");
// console.log(result); // 9 

const oddNumber = function (num) {
 
  let largeOdd = ""
  for (let i = 0; i < num.length ; i++) {
    if ((+num[i]) % 2 === 1 && num[i] > largeOdd) {
      largeOdd = num[i]
    }
  }
  return largeOdd;
};
const result1 = oddNumber("10422");
console.log(result1);