/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    // 后序遍历
    let max = Number.MIN_SAFE_INTEGER;
    if (!root) return max;
    

    const dfs = (root) => {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);

        max = Math.max(max, left + right + root.val);

        return root.val + Math.max(left, right) > 0 ? root.val + Math.max(left, right) : 0;
    }

    dfs(root);
    return max;
};
// @lc code=end

