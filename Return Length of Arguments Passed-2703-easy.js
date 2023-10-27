var argumentsLength = function(...args) {
  return args.length ;
	
};
const fn = argumentsLength([{}, null, "3"]);
console.log(fn);
