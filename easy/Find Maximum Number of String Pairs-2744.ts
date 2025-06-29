function maximumNumberOfStringPairs(words: string[]): number {
    const map: { [key: string]: number } = {};
    
    const rev = (w: string): string => w.split('').reverse().join('');
    
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = i;
    }
    
    let res = 0;
    
    for (let i = 0; i < words.length; i++) {
        let r = rev(words[i]);
        if (map[r] >= 0 && map[r] !== i) res++;
        delete map[words[i]];
    }
    
    return res;
};

console.log(maximumNumberOfStringPairs(["ab","ba","cc"])); // 1
console.log(maximumNumberOfStringPairs(["ab","ca","cc"])); // 2