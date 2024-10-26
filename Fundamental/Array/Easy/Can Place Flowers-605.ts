function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let unplanted = n

    for (let i = 0; i < flowerbed.length; i++) {
        if (unplanted === 0) break

        if (flowerbed[i] == 1){
            i++
            continue
        }

        if (!flowerbed[i - 1] && !flowerbed[i+1]) {
            unplanted--
            i++
        }

    }

    return !unplanted;
};
console.log(canPlaceFlowers([1,0,0,0,1], 1)); // truee
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false