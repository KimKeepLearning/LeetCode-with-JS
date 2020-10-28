/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    //这不就是层次遍历吗 mymymy
    // if (!root) return 0;
    // let queue = [];
    // queue.push(root);
    // let level = 0
    // while (queue.length) {
    //     let len = queue.length;
    //     level++;
    //     while (len--) {
    //         root = queue.shift();
    //         if (!root.left && !root.right) return level;
    //         if (root.left) queue.push(root.left);
    //         if (root.right) queue.push(root.right);
    //     }
    // }

    // 原来递归也可以
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let min_depth = Infinity;

    if (root.left) {
        min_depth = Math.min(minDepth(root.left) + 1, min_depth);
    }
    if (root.right) {
        min_depth = Math.min(minDepth(root.right) + 1, min_depth);
    }
    return min_depth;

};
// @lc code=end

