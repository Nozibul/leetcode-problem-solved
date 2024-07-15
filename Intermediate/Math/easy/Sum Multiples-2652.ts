function sumOfMultiples(n: number): number {
    let sum: number = 0;
    
    for(let i = 1; i <= n; i++){
        if(!(i % 3) || !(i % 5) || !(i % 7)) sum += i;
    }
    return sum;
};
console.log(sumOfMultiples(7));// 21