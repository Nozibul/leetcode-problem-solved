// Higher Order Function
function memoize(fn) {
    let cache = {};
    return function (...args) {
      const argKey = JSON.stringify(args);
      if ( cache[argKey] !== undefined) return cache[argKey];
      return cache[argKey] = fn(...args);
    };
  }
  
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
//   console.log(memoizedFn([[0,0],[0,0],[]]));
  console.log(memoizedFn(2, 3)); // 5
  console.log(memoizedFn(2, 3)); // 5
  
  console.log(callCount); // 1