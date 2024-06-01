function duplicateNumbersXOR(input: number[]): number {
    const RANGE_OF_VALUES: number[] = [1, 50];
    const frequency: number[] = new Array(RANGE_OF_VALUES[1] + 1).fill(0);
    let xorDuplicates = 0;

    for (let value of input) {
        if (++frequency[value] === 2) {
            xorDuplicates ^= value;
        }
    }
    return xorDuplicates;
};
console.log(duplicateNumbersXOR([1,2,1,3])); // 1
console.log(duplicateNumbersXOR([1,2,3])); // 0