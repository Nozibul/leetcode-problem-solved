/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    for (let i = 0; i < s.length; i++) {
 console.log(s.indexOf(s[i]), "=", t.indexOf(t[i]));
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            
            return false;
        }
    }
    return true;
};

// console.log(isIsomorphic("egg", "adp")); // true
console.log(isIsomorphic("paper", "title")); // true