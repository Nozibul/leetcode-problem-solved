
var reduce = function(nums, fn, init) {
    let acc = init;
    // if(!acc) acc =  nums[0];
    for(let i = 0; i < nums.length; i++){
      acc = fn(acc, nums[i])
    }
    return acc ;
};
const ownReduce = reduce([1,2,3,4], (acc, cur)=>{
    return acc + cur ;
}, 0);
console.log(ownReduce)
