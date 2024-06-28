function maxCoins(piles: number[]): number {
    piles.sort((a, b) => b - a);
    let count = piles.length / 3 ;
    let ans = 0;
    let pointer = 1;

    while (count) {
        count--
        ans += piles[pointer]
        pointer += 2
    }
    return ans;
};
console.log(maxCoins([2,4,5])); // 4