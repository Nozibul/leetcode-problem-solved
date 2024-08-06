function minimumOperations(nums: number[]): number {
    let count: number = 0;

    for(let num of nums){
        if(num % 3 !== 0) count++
    };

    return count;
};
console.log(minimumOperations([1, 2, 3, 4])); // 3