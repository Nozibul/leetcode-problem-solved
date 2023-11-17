function lastVisitedIntegers(words) {
    let reverseArr = [];
    let visited = []; // 1
    let previousCount = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === 'prev') {
        previousCount++; //1 
        reverseArr.push(previousCount > visited.length ? -1 : visited[visited.length - previousCount]);
      } else {
          visited.push(parseInt(words[i]));
          previousCount = 0;
      }
    }
  
    return reverseArr;
  }
  
  const words = ["1", "prev", "2", "prev", "prev", "prev"];
  const result = lastVisitedIntegers(words);
  console.log(result); // [ 1, 2, 1, -1 ]
  