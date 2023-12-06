
/**
 * @param {number} n
 * @return {number}
 */
// var totalMoney = function(n) {
//     let sum = 0;
//     let week = 0;
//     let day = 1; // 8

//     for(let i = 1 ; i <= n ; i++){
//         sum += week + day;
//         day++;

//         if( i % 7 == 0){
//             week++;
//             day = 1;
//         }
//     }
//     return sum;
//  }


var totalMoney = function(n) {
    let sum = 0;
    let currDay = 1; 
    
    for (let i = 1; i <= n; i++) {
        sum += currDay;
        currDay++

        if (i % 7 === 0) {
            currDay = i / 7 + 1; // reset current day
        };
    }
    return sum;
};

const result = totalMoney(4);
console.log(result); // 10