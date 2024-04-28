/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps=0;
    let holder=capacity;
    for(let i=0;i<plants.length;i++){
        if(plants[i]>holder){
            holder=capacity;
            steps=steps+(2*i)+1;
        }else{
            steps++;
        }
        holder-=plants[i];
    }
    return steps;
};

console.log([1,1,1,4,2,3], 4); // 30