/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    for (let i = 0; i < moves.length; i++) {

        const [row, col] = moves[i];
        const player = i % 2 === 0 ? 'A' : 'B';

        grid[row][col] = player; 

        // Check for a winner
        if (
            (grid[row][0] === player && grid[row][1] === player && grid[row][2] === player) ||
            (grid[0][col] === player && grid[1][col] === player && grid[2][col] === player) ||
            (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) ||
            (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player)
        ) {
            return player;
        }
    }

    // Check for a draw or pending
    if (moves.length === 9) {
        return 'Draw';
    } else {
        return 'Pending';
    }
};
    
const result = tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]);
console.log(result); // Output: "A"
    