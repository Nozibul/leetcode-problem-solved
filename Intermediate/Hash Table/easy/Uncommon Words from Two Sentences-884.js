/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */var uncommonFromSentences = function(s1, s2) {
    let m = new Map()
    
    s1 = s1.split(' ')

    // Iterate through each word in the first sentence (s1).
    for (let i = 0; i < s1.length; i++) {
        if (m.has(s1[i])) {
            m.set(s1[i], m.get(s1[i]) + 1)
        } else {
            m.set(s1[i], 1)
        }
    }

    s2 = s2.split(' ')

    // Iterate through each word in the second sentence (s2).
    for (let i = 0; i < s2.length; i++) {
        if (m.has(s2[i])) {
            m.set(s2[i], m.get(s2[i]) + 1)
        } else {
            m.set(s2[i], 1)
        }
    }

    let result = []

    // Iterate through the map to check the frequency of each word.
    for (let [key, val] of m) {
        if (val === 1) {
            result.push(key)
        }
    }
    return result
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));// Output: ["sweet","sour"]