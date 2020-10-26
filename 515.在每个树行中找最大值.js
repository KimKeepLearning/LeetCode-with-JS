/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    const result = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        let number = [];
        while (len--) {    
            root = queue.shift();
            number.push(root.val);
            if (root.left) queue.push(root.left);
            if (root.right) queue.push(root.right);
        }

        result.push(Math.max.apply(null,number));
    }
    return result;
};
// @lc code=end

