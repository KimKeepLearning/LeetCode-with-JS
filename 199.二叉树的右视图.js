/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 这特么层次遍历完胜
    if(!root) return [];
    if(!root.left && !root.right) return [root.val];
    let queue = [root];
    let res = [];
    while(queue.length){
        let len = queue.length;
        while(len--){
            root = queue.shift();

            if(root.left) queue.push(root.left);
            if(root.right) queue.push(root.right);
        }
        res.push(root.val);
    }
    return res;
};
// @lc code=end

