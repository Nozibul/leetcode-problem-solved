/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function (paths) {
    let desPath = new Set();
    for (let path of paths) {
        desPath.add(path[0]);
    }
    for (let path of paths) {
        if (!desPath.has(path[1])) return path[1];
    }
};
const result = destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]);
console.log(result);