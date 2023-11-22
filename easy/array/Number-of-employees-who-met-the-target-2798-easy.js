/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.reduce((count, curHours) => {
        if (curHours >= target) {
            count++;
        }
        return count;
    }, 0);
};

const result = numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2);
console.log(result); // 3