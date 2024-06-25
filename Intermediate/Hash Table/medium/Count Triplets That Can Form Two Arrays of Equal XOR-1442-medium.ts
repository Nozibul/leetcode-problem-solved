function countTriplets(arr: number[]): number {
    let count = 0;
    for (let start = 0; start < arr.length - 1; start++) {
        let accumulator = arr[start];
        for (let end = start + 1; end < arr.length; end++) {
            accumulator ^= arr[end];
            if (!accumulator) count += end - start;
        }
    }
    return count;
};

console.log(countTriplets([2,3,1,6,7])); // 4