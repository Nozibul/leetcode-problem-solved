/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    // [1, 2, 3, 4, 5]
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(i+1);
    };

    let index = 0;

    while(arr.length>1){
        index = (index + k - 1 ) % arr.length;
        arr.splice(index, 1);
    }

    return arr[0];
};
console.log(findTheWinner(5, 2)); //3