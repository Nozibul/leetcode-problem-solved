/**
 * @param {string[]} words
 * @return {string[]}
 */

// Better Approach
const stringMatching = (words) =>
  words.filter(currentWord => words.some(
      (otherWord) =>
        otherWord !== currentWord && otherWord.includes(currentWord)
    )
  );


// Bad Approach  
var stringMatching = function(words) {
    let newArr = []
    for (let i = 0; i < words.length; i++) {
       for (let j = 1; j < words.length; j++) {
        if(words[i] !== (words[j]) && words[i].includes(words[j])){
            newArr.push(words[j])
        }
       }
    }
  return newArr
};



console.log(stringMatching(["mass", "as", "hero", "superhero"])); // ["as","hero"]
