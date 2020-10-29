/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!t) {
        return true;
    } else if (!s) {
        return false;
    }
    if (sameTree(s, t)) return true;
    let left = sameTree(s.left, t);
    let right = sameTree(s.right, t);
    if (left || right) return true;

    return isSubtree(s.left, t) || isSubtree(s.right, t);
};
var sameTree = function (root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.val === root2.val && sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);

}
// @lc code=end

