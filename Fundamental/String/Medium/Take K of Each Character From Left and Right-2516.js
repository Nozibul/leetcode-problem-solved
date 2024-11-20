var takeCharacters = function(s, k) {
    if (k === 0) {
        return 0;
    }

    const map = {
        a: 0,
        b: 0,
        c: 0,
    };

    let i = 0;
    for (; i < s.length; i++) {
        map[s[i]] += 1;

        if (check(map, k)) {
            break;
        }
    }

    if (!check(map, k)) {
        return -1;
    }

    let min = i + 1;
    let j = s.length - 1;
    
    while (i >= 0) {
        map[s[i]] -= 1;
        i -= 1;

        while(!check(map, k)) {
            map[s[j]] += 1;
            j -= 1;
        }

        min = Math.min(min, i + 1 + (s.length - (j + 1)))
    }

    return min;
};

const check = (map, k) => {
    return map.a >= k && map.b >= k && map.c >= k;
}

console.log(takeCharacters("aabaaaacaabc", 2)); // 8