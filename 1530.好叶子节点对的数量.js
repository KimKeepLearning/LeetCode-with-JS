/*
 * @lc app=leetcode.cn id=1530 lang=javascript
 *
 * [1530] 好叶子节点对的数量
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    // 后序遍历
    var dfs = (root) => {
        if(!root) return new Array(11).fill(0);
        if(!root.left && !root.right){
            let ret = new Array(11).fill(0);
            ret[1] = 1;
            return ret;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);

        for(var i=0;i<11;i++){
            for(var j =distance - i;j>0;j--){
                res += left[i] * right[j];
            }
        }
        for (let i = 9; i >= 0; i--){
            left[i + 1] = right[i] + left[i];
        }
        return left;
    }
    let res = 0;
    dfs(root);
    return res;
};
// @lc code=end

