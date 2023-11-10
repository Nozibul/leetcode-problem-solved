var once = function (fn) {
  let oneTime = false;
  return function (...args) {
    if (!oneTime) {
      oneTime = true;
      return fn(...args);
    }
  };
};
let onceFn = once((a, b, c) => a + b + c);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(1, 2, 5)); // undefined

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
