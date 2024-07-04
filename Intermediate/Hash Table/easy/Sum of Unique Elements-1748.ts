function sumOfUnique(nums: number[]): number {
    const map = new Map<number, number>();
    let uniqueSum = 0;
    
    // iterate over nums array and for each num calculate and store it frequency in map
    nums.forEach((num) => map.set(num, map.has(num) ? map.get(num) + 1 : 0));
    // iterate over frequency map:
    map.forEach((value, key) => {
        if(!value) uniqueSum += key;
    })
    return uniqueSum;
};
console.log(sumOfUnique([1,2,3,2])); // 4