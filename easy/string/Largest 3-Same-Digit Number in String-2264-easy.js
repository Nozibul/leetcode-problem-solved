/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let maxValue = "";
  let res = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      res = num[i] + num[i] + num[i];

      if(res >= maxValue) maxValue = res
      else maxValue = maxValue
    } 
  }
  return maxValue;
};
const result = largestGoodInteger("23019");
console.log(result);
