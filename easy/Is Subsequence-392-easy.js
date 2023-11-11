/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const isSubsequence = (s, t) => {
    // if (s.length === 0) return true

    let subStr = 0 ;

    for (let i = 0; i < t.length; i++) {
        if (s[subStr] === t[i]) subStr++ ;
    }
    return subStr === s.length
}
  // Example usage:
  const result1 = isSubsequence("ace", "abcde"); 
  const result2 = isSubsequence("aec", "abcde");
  
  console.log(result1); // true
  console.log(result2); // false
  