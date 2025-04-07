const splitNum = function (n) {
    let arr = n.toString().split('').map(Number).sort()
    
    let str1 = "";
    let str2 = "";
    
    for(let i = 0; i<arr.length; i++){
        if(i % 2 === 0) str1 += arr[i]
        else str2 += arr[i];
    }
    return ~~str1 + ~~str2;
};
console.log(splitNum(4325));
console.log(splitNum(22245));