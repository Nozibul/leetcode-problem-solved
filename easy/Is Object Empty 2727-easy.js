/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const booleanObj = Object.keys(obj).length;
    return booleanObj ? false : true ;
    
   
};
const empty = isEmpty({"x": 5, "y": 42});
// const empty = isEmpty({})
console.log(empty);