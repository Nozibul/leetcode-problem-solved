const weirdExpressions = [
    "a othoba b",
    "b ebong c othoba d",
    "ebong ebong othoba othoba ebong",
    "((ebong) othoba ebong) ebong othoba",
    "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
    "ebong",
];

function processExpression(expression) {
    let modifiedExpression = expression.replace(/(\(|\))|(\w+)/g, (match) => {
        if (match === "(" && match[0] !== " ") return " " + match;
        if (match === ")" && match[match.length - 1] !== " ") return match + " ";
        return match;
    });

    const wordsArray = modifiedExpression.split(/\s+/);
    let ans = wordsArray.map((word, index) => {
        if ((word.includes("othoba") || word.includes("ebong")) && index % 2 === 1) {
            return word.includes("othoba") ? "||" : " && ";
        }
        return word;
    }).join(" ");

    return ans;
}

const optimizedExpressions = weirdExpressions.map(processExpression);
console.log(optimizedExpressions);

function ArrayChallenge(arr) { 

    // code goes here  
    return arr.reduce((sum, value)=> sum + value , 0); 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge([0, 0, 2, 3, 7, 1])