var maxDepth = function(s) {
    let maxCount =0; 
    let count = 0; 

    for (let val of s) {
        if (val === '(') maxCount = Math.max(maxCount, ++count)
        else if (val === ')') count--;
    }
    return maxCount;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3