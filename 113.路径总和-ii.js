/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) return [];
    
    
    var postorder = (root,pathsum,path) => {
        if (!root) return;
        pathsum += root.val;
        path.push(root.val);
        
        if (pathsum === sum && !root.left && !root.right) {
            res.push(Array.from(path));
        }

        postorder(root.left,pathsum,path);
        postorder(root.right, pathsum, path);
        path.pop();
    }
    var res = [];
    postorder(root, 0, []);
    return res;
};
// @lc code=end

