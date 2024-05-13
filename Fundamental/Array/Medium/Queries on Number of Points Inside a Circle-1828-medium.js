/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = function(points, queries) {
    let result = [];
    
    for (let [x, y, radius] of queries) {
        let count = 0;
        for (let [a,b] of points) {
            count += (x- a) * (x- a) + (y-b) * (y-b) <= radius*radius ? 1 : 0;
        }
        result.push(count);
    }
    return result;
}
console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]));
// [3, 2, 2]