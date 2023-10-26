var createHelloWorld = function() {
    return function() {
       return "Hello World";
   }
};
const  helloWorldFn = createHelloWorld() ;
console.log(helloWorldFn());