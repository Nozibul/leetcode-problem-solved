/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
	var a = parseInt(num1.split("+")[0]);
	var b = parseInt(num1.split("+")[1].replace("i", ""));
	var c = parseInt(num2.split("+")[0]);
	var d = parseInt(num2.split("+")[1].replace("i", ""));
	return `${a * c - b * d}+${a * d + b * c}i`;
};
console.log(complexNumberMultiply("1+-1i", "1+-1i")); // 0+-2i