
const removeDuplicate = function(nums) {
    let ind = 1;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[ind] = nums[i+1] // 1: 2, 2: 4
            ind++ ;
        }
    }
    return ind;
}; 
console.log(removeDuplicate([ 1, 1, 2, 4]));










/* const removeDuplicatess = function(nums) {
    let newA = [...new Set(nums)];

     return newA.length
    
};
console.log(removeDuplicatess([1, 2, 1, 7, 2 , 6]));  */

        // using set
/* const removeDuplicatesSet = function(nums){
    const filterToReduce = nums.reduce((acc, cur)=>{
        if(!acc.has(cur)){
          acc.add(cur);
        }
        return acc ;
      }, new Set());
      return filterToReduce
    }
  console.log(removeDuplicatesSet([ 1, 3, 1])); //[ 1, 3, 5 ] */


// using Reducer
/* const removeDuplicates = function(nums){
    const filterToReduce = nums.reduce((acc, cur)=>{
        if(!acc.includes(cur)){
          acc.push(cur);
        }
        return acc ;
      }, []);
      return filterToReduce.length
    }
//   console.log(removeDuplicates([ 1, 3, 1])); //[ 1, 3, 5 ] */



/* 
const duplicate = function(nums){
    const newA = nums.filter((value, index)=> nums.indexOf(value) === index)
    return newA
}
console.log(duplicate([0,0,1,1,1,2,2,3,3,4])) */



/* const removeDuplicates = function(nums) {
    const result = [];
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
        continue;
      } else {
        result.push(nums[i]);
        map[nums[i]] = true;
      }
    }
    return result;
  }


console.log(removeDuplicates([1, 2,1])); */