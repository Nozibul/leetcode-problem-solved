function minOperations(n: number): number {
     if (n % 2 === 0) {
          return (n / 2) * (n / 2);
     }
     return Math.floor((n / 2) * (n / 2));
}

console.log(minOperations(3)); // 2
console.log(minOperations(6)); // 2
/* 
Explanation: arr = [1, 3, 5]
First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].
*/
