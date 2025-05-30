var minCost = function(colors, neededTime) {
    let output = 0;
    let currentCursor = 0;
    
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] === colors[currentCursor]) {
            if (neededTime[i] > neededTime[currentCursor]) {
                output += neededTime[currentCursor];
                currentCursor = i;
            } else {
                output += neededTime[i];
            }
        } else {
            currentCursor = i;
        }
    }
    
    return output;
};
console.log(minCost( "abaac", [1,2,3,4,5])); // 3
console.log(minCost( "abc", [1,2,3])); // 0