/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    let getBSTnum = (left, right) => {
        if (left > right) return [null];
        if (left === right) return [new TreeNode(left)];
        let res = [];
        for (let i = left; i <= right; i++){
            let leftBst = getBSTnum(left, i - 1);
            let rightBst = getBSTnum(i + 1, right);
            for (let leftKey of leftBst) {
                for (let rightKey of rightBst) {
                    let root = new TreeNode(i);
                    root.left = leftKey;
                    root.right = rightKey;
                    res.push(root);
                }
            }
        }
        return res;
    }
    return getBSTnum(1, n);
};
// @lc code=end

