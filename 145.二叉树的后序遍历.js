/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    //递归
    // const dfs = (root) => {
    //     if (!root) return;
    //     dfs(root.left);
    //     dfs(root.right);
    //     res.push(root.val);
    // }
    // let res = [];
    // dfs(root);
    // return res;

    // 迭代
    if (!root) return [];
    let stack = [];
    let res = [];
    let prev = new TreeNode();
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        
        if (!root.right || root.right===prev) {
            res.push(root.val);
            prev = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }

    }
    return res;
};
// @lc code=end

