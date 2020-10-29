/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //选择中点当做根节点
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1, nums.length);
    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    return root;
};
// @lc code=end

