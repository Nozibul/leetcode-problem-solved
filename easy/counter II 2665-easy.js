var createCounter = function(init) {
    let current = init;
  
    return {
      increment: ()=> ++current,
      decrement: ()=> --current,
      reset: ()=> current = init
    };
  }

// Usage
var counter = createCounter(10)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement()) 
console.log(counter.reset())