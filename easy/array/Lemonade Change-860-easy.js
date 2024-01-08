/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const cash = [];
    for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
        cash.unshift(5); //  add bills in cash

      } else if (bills[i] === 10) {
        if (cash.shift() !== 5) return false;
        cash.push(10);

      } else {
        if (cash.shift() !== 5) return false;

        if (cash[cash.length - 1] !== 10) {
          cash.shift();
          if (cash.shift() !== 5) return false;

        } else {
          cash.pop();
        }
      }
    }
    return true;
  };
// Example usage:
const result = lemonadeChange([5, 5, 5, 10, 20]);
console.log(result); // Output: true
