var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(result =>{
    const sum = result.reduce((total, curValue) => total + curValue, 0);
    return sum;
   });

};

addTwoPromises(Promise.resolve(2), Promise.resolve(3)).then(console.log); // 4
