/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n <= 1) return n;

    let f1 = 0, f2 = 1, current;

    for (let i = 2; i <= n; i++) {
        current = f2 + f1;
        f1 = f2;
        f2 = current;
    }
    return current;
};
console.log(fib(3)); // Output: 2
