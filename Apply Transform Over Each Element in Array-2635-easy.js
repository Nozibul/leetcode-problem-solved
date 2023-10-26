const map = function (arr, fn) {
  let i = 0;
  const result = [];

  for (i; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};
const newArray = map([1, 2, 3], (element, index) => {
  return element + index;
});

console.log(newArray);
