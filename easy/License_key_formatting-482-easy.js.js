/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let newStr = S.replace(/-/g, '').toUpperCase();
    let arr = newStr.split("");
    console.log(arr);

    for(let i=newStr.length - 1 -K; i>= 0; i-=K){
      arr[i] = arr[i] + '-'
    }
    return arr.join('');
};
const result = licenseKeyFormatting("5F3Z-2e-9-w", 4);
console.log(result);