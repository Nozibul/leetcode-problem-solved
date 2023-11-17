const filter = function(arr, fn) {
    let result = [];
    for(let i in arr){
        if(fn(arr[i]) , Number(i)) 
         result.push(arr[i])
    }
    return result ;
};




