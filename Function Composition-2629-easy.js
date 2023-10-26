var compose = function(functions) {
	return function(x) {
        for (let fn of functions.reverse()) {
            x = fn(x)
          }
       return x;
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // 9

