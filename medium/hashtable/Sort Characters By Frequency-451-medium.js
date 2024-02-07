/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  return Object.values(
    s.split("").reduce((hash, i) => {
      hash[i] = (hash[i] || "") + i;
      return hash;
    }, {})
  ).sort((a, b) => b.length - a.length).join("");
};
console.log(frequencySort("Aabb")); // "bbAa"
