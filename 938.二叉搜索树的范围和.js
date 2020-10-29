/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        if (root.val >= L && root.val <= R) {
            result += root.val;
        }
        dfs(root.right);
    }
    let result = 0;
    dfs(root);
    return result;
};
// @lc code=end

