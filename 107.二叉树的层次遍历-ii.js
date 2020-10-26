/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
    if (!root) return [];
    let result = [];
    const tResult = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            root = queue.shift();
            result.push(root.val);
            if (root.left) queue.push(root.left);
            if (root.right) queue.push(root.right);
        }
        // console.log(result);
        tResult.unshift(result);
        result = [];
    }
    return tResult;
};
// @lc code=end

