/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if (!root1 && !root2) return true;
    let res1 = [];
    let res2 = [];
    dfs(root1, res1);
    dfs(root2, res2);

    if (res1.length !== res2.length) {
        return false;
    }

    for (var i = 0; i < res1.length; i++){
        if (res1[i] !== res2[i]) {
            return false;
        }
    }
    return true;
    
};
// 先序
var dfs = function (root, res) {
    if (!root) return;
    if (!root.left && !root.right) res.push(root.val);
    dfs(root.left, res)
    dfs(root.right, res);
}
// @lc code=end

