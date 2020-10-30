/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
    // 一般的层次遍历，没有用到完全二叉树的性质
    // if (!root) return 0;
    // let res = 0;
    // const queue = [root];
    // while (queue.length) {
    //     var len = queue.length;
    //     while (len--) {
    //         root = queue.shift();
    //         res++;
    //         if (root.left) queue.push(root.left);
    //         if (root.right) queue.push(root.right);
    //     }
    // }
    // return res;
    
    // 递归 -二分思想
    if (!root) return 0;
    let lDepth = depth(root.left);
    let rDepth = depth(root.right);
    if (lDepth === rDepth) {
        return Math.pow(2, lDepth) + countNodes(root.right);
    } else {
        return Math.pow(2, rDepth) + countNodes(root.left);
    }

};
var depth = function (root) {
    if (!root) return 0;
    let leftDepth = depth(root.left);
    let rightDepth = depth(root.right);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
}
// @lc code=end

