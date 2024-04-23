/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = boxes => {
    const indexes = []
    
    // Store the index for all balls
    for (const i in boxes) {
        if (boxes[i] === '1') indexes.push(i)
    }
    
    const answer = [];
    for (const i in boxes) {
        let moves = 0
        
        for (const index of indexes) {
            // Calculate the spaces between every
            // ball and the current index
            moves += Math.abs(i - index)
        }
        
        answer.push(moves);
    }
    return answer ;
}
console.log(minOperations("110"));// [1, 1, 3]