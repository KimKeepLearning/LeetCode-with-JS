/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 感觉递归可以
    if (inorder.length === 0) return null;
    let root = new TreeNode(preorder.shift());
    
    // 笑哭，查找数组中的元素不要那么麻烦啦！用indexOf
    const mid = inorder.indexOf(root.val);
    // let leftinorder = [];
    // let rightinorder = [];
    // for (var i = 0; i < inorder.length; i++){
    //     if (inorder[i] === root.val) {
    //         leftinorder = inorder.slice(0, i);
    //         rightinorder = inorder.slice(i + 1, inorder.length);
    //     }
    // }
    root.left = buildTree(preorder, inorder.slice(0, mid)) ;
    root.right = buildTree(preorder, inorder.slice(mid + 1));

    return root;
};
// @lc code=end

