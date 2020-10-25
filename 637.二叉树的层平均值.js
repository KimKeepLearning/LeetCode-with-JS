/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    //层次遍历
    const queue = [];
    queue.push(root);
    const result = [];
    while (queue.length) {
        let len = queue.length;
        let divLen = len;
        let sum = 0;
        while (len--) {
            root = queue.shift();
            sum += root.val;
            if (root.left) { queue.push(root.left); }
            if (root.right) { queue.push(root.right);}
        }
        result.push(sum/divLen);
    }
    return result;
};
// @lc code=end

