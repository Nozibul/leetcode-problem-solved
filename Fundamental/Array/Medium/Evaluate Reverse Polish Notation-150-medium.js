/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case "+":
                stack[stack.length - 2] += stack.pop();
                break;
            case "-":
                stack[stack.length - 2] -= stack.pop();
                break;
            case "*":
                stack[stack.length - 2] *= stack.pop();
                break;
            case "/":
                stack[stack.length - 2] = Math.floor((stack[stack.length - 2] / stack.pop()) | 0);
                break;
            default:
                stack.push(Number(tokens[i]));
                break;
        }
    }
    return stack[0]
};
console.log(evalRPN(["2","1","+","3","*"]));
Output: 9
Explanation: ((2 + 1) * 3) = 9