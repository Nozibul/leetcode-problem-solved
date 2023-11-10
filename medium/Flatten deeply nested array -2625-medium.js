var flat = function (arr, n) {
  if (n > 0) {
    let newArray = [];
    for (let item of arr) {
        if (Array.isArray(item)) newArray.push(...flat(item, n-1));
        else newArray.push(item);
    }
    return newArray;
  }
  return arr;
};

const array = flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],2);
console.log(array);

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
