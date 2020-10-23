/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    //层次遍历
    // if (!root) return false;
    // const que = [];
    // const quenum = [];
    // let nownum = 0;
    // que.push(root);
    // quenum.push(root.val);
    // while (que.length) {
    //     root = que.shift();
    //     nownum = quenum.shift();

    //     if (!root.left && !root.right) {
    //         if (nownum == sum) return true;
    //     }

    //     if (root.left) {
    //         que.push(root.left);
    //         quenum.push(root.left.val + nownum);
    //     }
    //     if (root.right) {
    //         que.push(root.right);
    //         quenum.push(root.right.val + nownum);
    //     }
    // }
    // return false;

    //递归，用减法，减到0就是了
    if (!root) return false;
    if (!root.left && !root.right) return sum === root.val;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
// @lc code=end

