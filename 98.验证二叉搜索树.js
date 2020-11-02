/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    if (!root || (!root.left && !root.right)) return true;
    // 中序遍历是否有序
    // let inorder = [];
    // const dfs = (root) => {
    //     if (!root) return;
    //     dfs(root.left);
    //     inorder.push(root.val);
    //     dfs(root.right);
    // }

    // dfs(root);
    // for (var i = 0; i < inorder.length - 1; i++){
    //     if (inorder[i] >= inorder[i + 1])
    //         return false
    // }

    // return true;

    // 左右子树递归判断
    const dfs = (root, min, max) => {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }
    return dfs(root, -Infinity, Infinity);

};
// @lc code=end

