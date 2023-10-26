const createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(5);
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
