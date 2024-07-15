function xorOperation(n: number, start: number): number {
    let startNum: number = start;
    let result: number = startNum;
    
    for (let i = 0; i < n-1; i += 1){
        startNum += 2;
        result ^= startNum
    }
    return result;
};
console.log(xorOperation(5, 0)); // 8