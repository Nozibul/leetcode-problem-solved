var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let completedCount = 0;
    const results = [];
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          results[i] = result;
          completedCount++;

          if (completedCount === functions.length) resolve(results);
        })
        .catch((error) => reject(error));
    }
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
