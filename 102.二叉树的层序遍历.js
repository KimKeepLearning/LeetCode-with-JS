/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length) {
        var len = queue.length;
        let level = [];
        while (len--) {
            root = queue.shift();
            level.push(root.val);
            if (root.left) queue.push(root.left);
            if (root.right) queue.push(root.right);
        }
        result.push(level);
    }
    return result;
    
};
// @lc code=end

