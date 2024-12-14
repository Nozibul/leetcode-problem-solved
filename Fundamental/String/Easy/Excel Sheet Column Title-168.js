/**
 * @param {number} columnNumber
 * @return {string}
 */


var convertToTitle = function(columnNumber) {
    let res = "";

    while (columnNumber > 0) {
        columnNumber--;
        res = String.fromCharCode((columnNumber % 26) + "A".charCodeAt(0)) + res;
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return res;    
};
console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB