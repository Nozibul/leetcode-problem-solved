var sumOddLengthSubarrays = function(arr) {
    let sum = 0, N = arr.length;
    for (let i = 0; i < N; i++) {
        let total = i * (N-i) + (N-i);
        sum += Math.ceil(total / 2) * arr[i];
    };
    return sum;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3])); // 58