// var expect = function(val) {
//     return {
//       toBe: function (otherVal) {
//         if (val === otherVal) {
//           return true;
//         }else{
//           throw new Error("Not Equal")
//         }
        
//       },
//       notToBe: function (otherVal) {
//         if (val !== otherVal) {
//           return true;
//         } else{
//           throw new Error("Equal")
//         }
        
//       }
//     };
//   };

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"

var createCounter = function(init) {
        let current = init;
      
        return {
          increment: function () {
             return ++current
          },
          decrement: function () {
            return --current;
          },
          reset: function () {
            current = 0;
            return current;
          }
        };
      }
//         if (val !== otherVal) {
//           return true;
//         } else{
//           throw new Error("Equal")
//         }
        
//       }
//     };
//   };

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"

var createCounter = function(init) {
        let current = init;
      
        return {
          increment: function () {
             return ++current
          },
          decrement: function () {
            return --current;
          },
          reset: function () {
            current = 0;
            return current;
          }
        };
      }

// Usage
var counter = createCounter(10)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement())
console.log(counter.reset())
