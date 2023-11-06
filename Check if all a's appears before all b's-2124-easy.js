var checkString = function(s) {
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (count === 0 && c === 'b') {
        count = 1;
      }
      else if(count === 1 && c === 'a') {
        // Invalid string
        return false;
      }
    };
  
    return true;
  };

  const result = checkString("aaabbb")
  console.log(result); // true
