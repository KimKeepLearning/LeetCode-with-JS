/*
 * @lc app=leetcode.cn id=1123 lang=javascript
 *
 * [1123] 最深叶节点的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var lcaDeepestLeaves = function(root) {
    if(!root) return null;
    let diff = depth(root.left) - depth(root.right);
    if (diff===0) {
        return root;
    } else if(diff<0){
        return lcaDeepestLeaves(root.right);
    } else {
        return lcaDeepestLeaves(root.left);
    }
};

var depth = function(root){
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
}
// @lc code=end

