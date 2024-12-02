function isPrefixOfWord(sentence: string, searchWord: string): number {
    const sentenceArr = sentence.split(' ');
    
    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
}
console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2