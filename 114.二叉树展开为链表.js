/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // 按先序展开为链表
    //迭代
    if (!root) return;
    let stack = [root];
    let prev = null;
    while(stack.length){
        root = stack.pop();

        if(prev){
            prev.left = null;
            prev.right = root;
        }
        if(root.right) stack.push(root.right);
        if(root.left) stack.push(root.left);
        prev = root;
    }


};

// @lc code=end

