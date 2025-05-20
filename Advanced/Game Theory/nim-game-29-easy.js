var canWinNim = function (n) {
  if (n % 4 !== 0) return true;
  return false;
};
console.log(canWinNim(5)); // true
console.log(canWinNim(8)); // false
