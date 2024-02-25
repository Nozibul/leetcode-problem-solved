
const weirdExpressions = [
    "a othoba b",
    "b ebong c othoba d",
    "ebong ebong othoba othoba ebong",
    "((ebong) othoba ebong) ebong othoba",
    "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
    "ebong",
];

let counter = 0;
for (const expression of weirdExpressions) {
    let word = "";
    for (let i = 0; i < expression.length; i++) {
        word += expression[i];

        if (i < expression.length && word[i] == ")" && expression[i + 1] >= "a" && expression[i + 1] <= "z") {
            word += " ";
        } else if (expression[i] == "(" && word[i - 1] >= "a" && word[i - 1] <= "z") {
            let modifyString = word.substring(0, word.length - 1) + " ";
            modifyString += expression[i];
            word = modifyString;
        }
    }
    // split words
    const wordsArray = word.split(" ");
    let ans = "";

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].includes("othoba") && i % 2 == 1) {
            ans += "||";
        } else if (wordsArray[i].includes("ebong") && i % 2 == 1) {
            ans += " && ";
        } else ans += wordsArray[i];

        ans += wordsArray.length - 1 == i ? "" : " ";
    }
    weirdExpressions[counter++] = ans;
}

console.log(weirdExpressions);