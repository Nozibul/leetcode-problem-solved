/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // Edge case
    if (g.length === 0 || s.length === 0) return 0;

    // Sort both arrays
    g.sort((a, b) => a - b);
    s.sort((a, b)=> a - b);

    // Initialize pointers and count using meanigful names
    let childPointer = 0;
    let cookiePointer = 0;
    let count = 0;

    // Iterate through both arrays using two pointers
    while(childPointer < g.length && cookiePointer < s.length){
        if(g[childPointer] <= s[cookiePointer]){
            count++;
            childPointer++;
            cookiePointer++;
        }
        else cookiePointer++;
    }
    
    // Return the count of content children
    return count;
};
console.log(findContentChildren([1,2,3],[1,1])); // 1
console.log(findContentChildren([1,2],[1,2,3])); // 2