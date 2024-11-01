function makeFancyString(s: string): string {
    const l = s.length;
    if (l < 3) return s;

    let res = s[0];

    for (let i = 1; i < l - 1; i += 1) {
        if (s[i - 1] === s[i] && s[i] === s[i + 1]) continue;
        res += s[i]
    }

    res += s[l - 1]

    return res;
};
console.log(makeFancyString("leeetcode")); // leetcode