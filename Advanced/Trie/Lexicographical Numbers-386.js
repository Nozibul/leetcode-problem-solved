var lexicalOrder = function(n) {
    let res = [];
    let num = 1;
    for (let i = 0; i < n; i++) {
        res.push(num);
        if (num * 10 <= n) {
            num *= 10;  // Go deeper
        } else {
            while (num % 10 === 9 || num >= n) {
                num = Math.floor(num / 10);  // Go back up
            }
            num++;  // Move to the next number
        }
    }
    return res;
};
console.log(lexicalOrder(13)); // [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(lexicalOrder(11)); // [1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9]