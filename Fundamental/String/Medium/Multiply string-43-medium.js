
var multiply = function(num1, num2) {
    return (BigInt(num1)*BigInt(num2)).toString();
};
const result = multiply("123", "456");
console.log(result); // "56088"