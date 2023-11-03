/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentDays = 0;
    let lateDays = 0 ;
    for(let i = 0; i < s.length ; i++){
        if(s[i] === "A"){
            absentDays++;
            if(absentDays >= 2) return false ;
            lateDays = 0;

        } else if(s[i] === "L"){
           lateDays++;
           if(lateDays >= 3) return false ;
        }else lateDays = 0 ;
    }
    return true ;
};
const result = checkRecord("LALL");
console.log(result); // true ;