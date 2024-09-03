function getLucky(s: string, k: number): number {
    let num: string = ''
    for (let i = 0; i < s.length; i++) {
        num += (s.charCodeAt(i) - 96).toString();
    }
    let res: number = 0

    while (k > 0) {
        for (let i = 0; i < num.length; i++) {
            res += parseInt(num[i]);
        }
        num = res.toString();
        res = 0;
        k--;
    }

    return parseInt(num);
};
console.log(getLucky("iiii", 1)); // 36