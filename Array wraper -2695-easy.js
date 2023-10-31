var ArrayWrapper = function(nums) {
    this.nums = nums ;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
   const sum = this.nums.reduce((acc, curr)=> acc + curr ,0);
   return sum ;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`;
};


const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// console.log(obj1 + obj2); // 10);
console.log(String(obj1)); // "[1,2]"
// console.log(String(obj2)) // "[3,4]"
