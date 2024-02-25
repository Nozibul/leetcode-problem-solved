/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const minSalary = Math.min(...salary);
    const maxSalary = Math.max(...salary);

    const sum = salary.reduce((acc, curValue) => {
        if (curValue !== minSalary && curValue !== maxSalary) return acc + curValue;
        else return acc;  
    }, 0);

    // Calculate the average
    const average = sum / (salary.length - 2);
    return average;
};

const result = average([4000, 3000, 1000, 2000]);
console.log(result);
