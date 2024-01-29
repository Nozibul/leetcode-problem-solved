/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    
    let letters = ['A', 'B', "C", "D", 'E', 'F', "G", 'H', 'I', 'J', 'K', 'L', "M", 'N', "O", "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];    

    let firstLetter = s[0];
    let firstLetterIndex = letters.indexOf(firstLetter);
    let secondLetter = s[3];
    let firstNum = s[1];
    let secondNum = s[4];

    let answer = [];

    for ( let i = firstLetterIndex; i < letters.length; i++) {
        let cell = letters[i];
        
        for ( let j = firstNum; j <= secondNum; j++) {
            answer.push(cell + j);
        }
        
        if(letters[i] === secondLetter) {
            break;
        }
    }
    return answer
};
console.log(cellsInRange("K1:L2")); // ["K1","K2","L1","L2"]