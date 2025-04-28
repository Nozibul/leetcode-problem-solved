
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
	let a = s.split("").sort((a, b) => +b - +a)
	let one = a.shift()
	a.push(one)
	return a.join("")
  };

console.log(maximumOddBinaryNumber("0101")); // "1001"