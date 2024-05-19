/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
const processQueries = (queries, m) => {
    const p = [...Array(m)].map((_, idx) => idx + 1);
    const ans = [];
  
    queries.forEach(item => {
      // find index and push to ans
      const index = p.indexOf(item);
      ans.push(index);
      
      // update the permutation
      p.unshift(item);
      p.splice(index + 1, 1);
    });
  
    return ans;
  };
console.lgo(processQueries([3,1,2,1], 5)) ;// [2,1,2,1]
/* 
Explanation: The queries are processed as follow: 
For i=0: queries[i]=3, P=[1,2,3,4,5], position of 3 in P is 2, then we move 3 to the beginning of P resulting in P=[3,1,2,4,5]. 
For i=1: queries[i]=1, P=[3,1,2,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,3,2,4,5]. 
For i=2: queries[i]=2, P=[1,3,2,4,5], position of 2 in P is 2, then we move 2 to the beginning of P resulting in P=[2,1,3,4,5]. 
For i=3: queries[i]=1, P=[2,1,3,4,5], position of 1 in P is 1, then we move 1 to the beginning of P resulting in P=[1,2,3,4,5]. 
Therefore, the array containing the result is [2,1,2,1].
*/  