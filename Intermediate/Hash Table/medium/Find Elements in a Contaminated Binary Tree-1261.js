/** 
 * @param {number} target
 * @return {boolean}
 */
var FindElements = function(root) {
    this.tree = root
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    this.tree.val = 0;
    function find(target,root){
        if(!root) return false;
        let val = root.val
        if(val === target) return true;
        if(root.left) {
            root.left.val = 2*val +1;
            if(find(target,root.left)) return true
        }
        if(root.right) {
            root.right.val = 2*val +2;
            if(find(target,root.right))return true
        }
        return false
    }
     return find(target,this.tree)
    
};
