/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function(root) {
    //先序
    let paths = [];
    computePath(root, "", paths)
    

    let res = 0;
    for (let path of paths) {
        res += parseInt(path, 2);
    }
    return res;


};
var computePath = function (root, path, paths) {
    if (!root) return;
    path += root.val.toString();
    if (!root.left && !root.right) {
        paths.push(path);
    } else {
        computePath(root.left, path, paths);
        computePath(root.right, path, paths);
    }
}
// @lc code=end

