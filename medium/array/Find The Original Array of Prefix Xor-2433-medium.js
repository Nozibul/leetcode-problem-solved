
/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let prev = pref[0];
    
    for (let i = 1; i < pref.length; i++) {
        pref[i] ^= prev;
        prev ^= pref[i];
    }
    return pref;    
};
console.log(findArray([5,2,0,3,1])); // [5,7,2,3,2]