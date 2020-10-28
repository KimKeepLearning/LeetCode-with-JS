/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    if (!root || (!root.left && !root.right)) return -1;
    
    let left = root.left.val;
    let right = root.right.val;

    if (left === root.val) {
        left = findSecondMinimumValue(root.left);
    }
    if (right === root.val) {
        right = findSecondMinimumValue(root.right);
    }

    if (left !== -1 && right !== -1) {
        return Math.min(left, right);
    }
    return right === -1 ? left : right;

    
};
// @lc code=end

