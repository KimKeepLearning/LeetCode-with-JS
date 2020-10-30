/*
 * @lc app=leetcode.cn id=865 lang=javascript
 *
 * [865] 具有所有最深结点的最小子树
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    // 什么破题目描述，本质是最深叶子节点的最近公共祖先
    if (!root) return null;
    let lDepth = depth(root.left);
    let rDepth = depth(root.right);

    if (lDepth === rDepth) {
        return root;
    } else if (lDepth - rDepth > 0) {
        return subtreeWithAllDeepest(root.left);
    } else {
        return subtreeWithAllDeepest(root.right);
    }
};

var depth = function (root) {
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
}
// @lc code=end

