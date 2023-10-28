var timeLimit = function (fn, delay) {
  return async function (...args) {
   return Promise.race([
    fn(...args), // 150 ms
    new Promise((_, reject) => {
        setTimeout(()=> reject("Time Limit Exceeded"), delay) // delay = 100ms
    })
   ])
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
