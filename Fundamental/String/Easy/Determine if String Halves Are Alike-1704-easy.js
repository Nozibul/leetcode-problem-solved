/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const input = s.toLowerCase();
  const half = s.toLowerCase().length / 2;
  
  let vowels = ["a", "e", "i", "o", "u"];

  let firstCount = 0;
  let secondCount = 0;

  for (let i = 0; i < half; i++) {
    if (vowels.includes(input[i])) firstCount++;
    if (vowels.includes(input[half + i])) secondCount++;
  }
  return firstCount === secondCount;
};
console.log(halvesAreAlike("Uo"));
