/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    //层次遍历
    // if (!root) return 0;
    // const queue = [];
    // let sum = 0;
    // queue.push(root);
    // while (queue.length) {
    //     root = queue.shift();
    //     if (root.left) {
    //         queue.push(root.left);
    //         if (!root.left.left && !root.left.right) { sum += root.left.val;}
    //     }
    //     if (root.right) { queue.push(root.right) };
    // }
    // return sum;

    //中序遍历
    if (!root) return 0;
    const stack = [];
    let sum = 0;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val; 
        }
        root = root.right;
       
    }
    return sum;

};
// @lc code=end

