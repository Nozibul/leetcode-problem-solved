/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let obj = {}
    let newArr = [...arr].sort((a,b) => a-b)
    let rank = 1;
    
    for(let i = 0; i < newArr.length;i++) {
        if(obj[newArr[i]]) {
        } else {
            obj[newArr[i]] = rank
            rank++
        }
    }

    for(let i = 0; i < arr.length;i++) {
        arr[i] = obj[arr[i]]
    }

    return arr
};
console.log(arrayRankTransform([40,10,20,30])); // [4,1,2,3]
console.log(arrayRankTransform([100,100,100])); // [1,1,1]