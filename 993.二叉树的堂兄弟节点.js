/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    //层次遍历
    const queue = [];
    queue.push(root);
    
    while (queue.length) {
        let len = queue.length;//记录下当前层的个数
        let xNode = TreeNode(0, null, null);
        let yNode = TreeNode(0, null, null);
        let xFather = TreeNode(0, null, null);
        let yFather = TreeNode(0, null, null);
        while (len-- > 0) {
            root = queue.shift();
            
            if (root.left) {
                queue.push(root.left);
                if (root.left.val === x) { xNode = root.left; xFather = root; }
                if (root.left.val === y) { yNode = root.left; yFather = root; }
            }
            if (root.right) {
                queue.push(root.right);
                if (root.right.val === x) { xNode = root.right; xFather = root; }
                if (root.right.val === y) { yNode = root.right; yFather = root; }
            }
            if (xNode && yNode && xFather.val !== yFather.val) {
                return true;
            }
        }
       
    }
    return false;
};
// @lc code=end

