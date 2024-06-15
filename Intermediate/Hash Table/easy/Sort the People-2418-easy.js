/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let persons = names.map((element, index) => Object.assign(
    {name: element}, {height: heights[index]}));

    let sorted = persons.sort((a,b) => a.height > b.height ? -1 : 1);

    return sorted.map(element => element.name);
};
console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // ["Mary","Emma","John"]