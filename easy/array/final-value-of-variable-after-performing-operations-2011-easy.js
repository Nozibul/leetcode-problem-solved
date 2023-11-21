/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num = 0 ;

    for(let operation of operations){
        if(operation === "--X" || operation === "X--") num-- ;
        else if(operation === "++X" || operation === "X++") num++ ;
        else 0 ;
    };
    return num;
};
const result = finalValueAfterOperations(["++X","++X","X++"]);
console.log(result);



