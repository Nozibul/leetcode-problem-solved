/**
 * @param {number[][]} grid
 * @return {number}
 */
let visited = new Set()
const moves = [[0, -1], [0, 1], [1, 0], [-1, 0]]
var minimumTime = function(grid) {
    visited = new Set();
    // Check if there is no path
    if(grid[0][1] > 1 && grid[1][0] > 1){
        return -1
    }
    
    return solve(grid)
};

function solve(grid){
    const heap = new MinPriorityQueue()
    heap.enqueue([0, 0, 0], 0)
    while(heap.size() > 0){
        let c = heap.dequeue().element
        let i = c[0]
        let j = c[1]
        let key = `${i}_${j}`
        visited.add(key)
        let time = c[2]
        if(i == grid.length -1 && j == grid[0].length-1) {
            return time
        }
        const nm = moves.map(m => [i + m[0], j + m[1]]).filter(m => m[0] >= 0 && m[1] >= 0 && m[0] < grid.length && m[1] < grid[0].length).filter(m => !visited.has(`${m[0]}_${m[1]}`))
        
        for(let m of nm) {
            let nt = time+1
            if(time + 1 < grid[m[0]][m[1]]) {
                let diff = grid[m[0]][m[1]] - time-1
                nt = diff % 2 == 0 ? 
                    grid[m[0]][m[1]] : grid[m[0]][m[1]] + 1
                
            }
            visited.add(`${m[0]}_${m[1]}`)
            heap.enqueue([...m, nt], nt)
        }
    }
    return -1;
}
console.log(minimumTime([[0,1,3,2],[5,1,2,5],[4,3,8,6]])); // 7