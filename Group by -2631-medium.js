Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, curr) => {
    let key = fn(curr);
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr);
    return acc;
  }, {});
};

const arr = [1, 2, 3].groupBy(String);
console.log(arr);
