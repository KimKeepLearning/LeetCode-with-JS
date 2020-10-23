/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

 /**递归 */
// var isSymmetric = function (root) {
//     return check(root, root);
    
// };
// var check = function (p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
// }
/**层次遍历 */
var isSymmetric = function (root) {
    return check(root, root);
}
var check = function (u, v) {
    let queue = [];
    queue.push(u);
    queue.push(v);
    while (queue.length) {
        u = queue.shift();
        v = queue.shift();

        if (!u && !v) continue;
        if ((!u || !v) || u.val !== v.val) return false;

        queue.push(u.left);
        queue.push(v.right);
        queue.push(u.right);
        queue.push(v.left);
    }
    return true;
}



// @lc code=end

