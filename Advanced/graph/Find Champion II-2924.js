/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const findChampion = function (n, edges) {
    const ind = {};
    for (const [u, v] of edges) {
      ind[v] = ind[v] || 0;
      ind[v]++;
    }
  
    let ans = [];
    for (let u = 0; u < n; u++) {
      if (ind[u] === undefined) {
        ans.push(u)
      }
    }
    return (ans.length === 1) ? ans[0] : -1
  };
  console.log(findChampion(3, [[0,1],[1,2]])); // 0
  console.log(findChampion(4, [[0,1],[1,2],[2,3]])); // -1