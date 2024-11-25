const slidingPuzzle = function (board) {
    const mapping = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    }

    function swap(state, pos, next) {
        let array = state.split('');
        [array[pos], array[next]] = [array[next], array[pos]];
        return array.join('');
    }
    let state = '';
    board.forEach(row => state += row.join(''));
    let visited = new Set(state);
    let q = [[state, state.indexOf('0'), 0]];
    while (q.length) {
        let [state, pos, moves] = q.shift();
        if (state == '123450')
            return moves;
        for (let next of mapping[pos]) {
            let newState = swap(state, pos, next);
            if (visited.has(newState))
                continue;
            visited.add(newState);
            q.push([newState, next, moves + 1])
        }
    }
    return -1;
};
console.log(slidingPuzzle([[1,2,3],[5,4,0]])); // -1