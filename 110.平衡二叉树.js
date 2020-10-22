/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */


/* 
自顶向下，每一次都需要计算子树高度
*/
// var isBalanced = function (root) {
//     if (!root) return true;
//     let left = isBalanced(root.left);
//     let right = isBalanced(root.right);
//     let leftLen = depth(root.left);
//     let rightLen = depth(root.right);
//     let now = false;
//     if (leftLen - rightLen > 1 || rightLen - leftLen > 1) {
//         now = false;
//     } else {
//         now = true;
//     }
//     return left && right && now;

// };
// var depth = function (root) {
//     if (!root) return 0;
//     let left = depth(root.left);
//     let right = depth(root.right);
//     if (left > right) {
//         return left + 1;
//     }
//     return right + 1;
// }
/* 递归回溯的时候顺便返回树高，不用重复计算 */
var isBalanced = function (root) {
    return depth(root) >= 0;    

};
var depth = function (root) {
    if (!root) return 0;
    var left = depth(root.left);
    var right = depth(root.right);
    if (left == -1 || right == -1 || left - right > 1 || right - left > 1) {
        return -1;
    } else {
        return left > right ? left + 1 : right + 1;
    }
}




// @lc code=end

