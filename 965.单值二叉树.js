/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {

    return check(root, root.val);


};

var check = function (p, val) {
    if (!p) return true;
    if (p.val != val) return false;
    return check(p.left, val) && check(p.right, val);
}
// @lc code=end

