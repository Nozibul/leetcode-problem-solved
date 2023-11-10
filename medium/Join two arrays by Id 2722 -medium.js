const join = (arr1, arr2) => {
  const newObj = {};
  for (let value1 of arr1) {
    newObj[value1.id] = value1;
  }

  for(const value2 of arr2) {
    newObj[value2.id] = newObj[value2.id] ? { ...newObj[value2.id], ...value2} : value2;
}
  return Object.values(newObj);
};

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];

const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

const array = join(arr1, arr2);
console.log(array);
