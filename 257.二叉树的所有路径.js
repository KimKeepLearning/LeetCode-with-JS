/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return [];
    //先序遍历
    let paths = [];
    let path = "";
    const dfs = (root, path) => {
        if (!root) return "";
        if (!root.left && !root.right) {
            path += root.val.toString();
            paths.push(path);
        } else {
            path += root.val.toString() + "->";
        }

        dfs(root.left,path);
        dfs(root.right,path);
    }
    dfs(root, path);
    return paths;
    

};

// @lc code=end

