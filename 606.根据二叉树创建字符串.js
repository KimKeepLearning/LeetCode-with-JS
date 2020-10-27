/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    
    let res = preOrder(t);
    return res;


};
var preOrder = function (t) {
    if (!t) return "";
    let res = "";
   
    res += t.val.toString();
    if (!t.left && t.right) res += "()";
    if (t.left) {
        res += "(";
        res += preOrder(t.left);
        res += ")";
    } 
    

    if (t.right) {
        res += "(";
        res += preOrder(t.right);
        res += ")";
    }
   

    return res;

}
// @lc code=end

