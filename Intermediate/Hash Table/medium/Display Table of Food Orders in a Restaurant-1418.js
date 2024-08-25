/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let tabs = {}, items = {};
    for (order of orders) {
        food = order[2];
        items[food] = undefined;
    }
    
    let itemsArr = ['Table', ...Object.keys(items).sort()];

    for (order of orders) {
        let tabsNum = order[1], food = order[2], row = tabs[tabsNum];
        let idx = itemsArr.findIndex((el) => el === food);
        if (row) {
            tabs[tabsNum][idx] = (parseInt(tabs[tabsNum][idx]) + 1).toString();
        } else {
            let arr = new Array(itemsArr.length - 1).fill('0');
            tabs[tabsNum] = [tabsNum, ...arr];
            tabs[tabsNum][idx] = '1';
        }
    }
    return [itemsArr, ...Object.values(tabs)];
};

console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","10","Ceviche"]])); 
// [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"], ["3","0","2","1","0"], ["5","0","1","0","1"], ["10","1","0","0","0"]]