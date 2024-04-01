/**
 * @param {string} s
 * @return {string}
 */
function freqAlphabets(s) {
    const result = [];
    let i = 0;

    while (i < s.length) {
      const nextChar = s.slice(i + 2, i + 3);
      
      const charCode = nextChar === "#"
          ? parseInt(s.slice(i, i + 2))
          : parseInt(s.slice(i, i + 1));
      result.push(String.fromCharCode(charCode + 96));
      i += nextChar === "#" ? 3 : 1;
    }
    
    return result.join("");
  }
  console.log(freqAlphabets("10#11#12")); // "jkab"