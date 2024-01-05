/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
    
    for (let i = 0; i < operations.length; i++) {
        let ops = operations[i];

        if(ops === "C") record.pop();
        else if (ops === "D") record.push(record[record.length - 1] * 2);
        else if (ops === "+") record.push(record[record.length - 2] + record[record.length - 1]);
        else record.push(+ops);
    }

   return record.reduce((sum, score) => sum + score, 0);
};

const result = calPoints(["5","2","C","D","+"]);
console.log(result);
