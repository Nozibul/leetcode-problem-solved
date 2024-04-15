/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let count1 = -1;
    let count2 = s.length + 1;
    const result = [];
    
    for (let i = 0; i <= s.length; i++) {
      if (s[i] === "I") {
        count1 = count1 + 1;
        result.push(count1);
      } else {
        count2 = count2 - 1;
        result.push(count2);
      }
    }
    return result;
  };

  console.log(dispatchEvent("IDID")); //[0,4,1,3,2]
  console.log(dispatchEvent("III")); //[0,1,2, 3]