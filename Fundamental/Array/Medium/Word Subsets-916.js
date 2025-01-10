/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {

    let freq = new Array(26).fill(0)


    for(const word of words2) {
        const tempFreq = new Array(26).fill(0)
        for(const ch of word) {
            let i = ch.charCodeAt(0) - 97
            tempFreq[i]++;

            freq[i] = Math.max(freq[i], tempFreq[i])

        }


        
    }
    const ans = new Array()


    for(const word of words1) {

        const tempFreq = new Array(26).fill(0)

        for(const ch of word)  {

            tempFreq[ch.charCodeAt(0) - 97]++;
        }
        let isMatch = true;

        for(let i = 0; i < 26; i++) {

            if(freq[i] != 0 && freq[i] > tempFreq[i])  {
                isMatch = false;
                break;
            }
        }
        // console.log(tempFreq)
        if(isMatch) ans.push(word);
    }

    return ans;
    
};
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o","l","e"])); // ["apple","google","leetcode"]