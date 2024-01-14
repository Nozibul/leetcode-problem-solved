const weirdExpressions = [
    "a othoba b",
    "b ebong c othoba d",
    "ebong ebong othoba othoba ebong",
    "((ebong) othoba ebong) ebong othoba",
    "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
    "ebong",
];

function processExpression(expression) {
    // Replace parentheses with spaces around them
    let modifiedExpression = expression.replace(/(\()|(\))/g, (match) => match === '(' ? ' (' : ') ');

    // Split words
    const wordsArray = modifiedExpression.split(/\s+/);

    // Replace "othoba" and "ebong" based on index
    let ans = wordsArray.map((word, index) => {
        if ((word === "othoba" || word === "ebong") && index % 2 === 1) {
            return word === "othoba" ? "||" : " && ";
        }
        return word;
    }).join("");

    return ans;
}

const optimizedExpressions = weirdExpressions.map(processExpression);
console.log(optimizedExpressions);
