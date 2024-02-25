/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sum = 0 ;
    seats = seats.sort((a,b)=> a-b);    
    students = students.sort((a,b)=> a-b);

    for(let i=0; i<seats.length; i++){
        sum += Math.abs(seats[i] - students[i]);
    }    
    return sum;
};
const result = minMovesToSeat([3,1,5], [2,7,4]);
console.log(result);