/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    //中序遍历 (迭代)
    if (!root) return root;
    let stack = [];
    let newRoot = new TreeNode(-1);
    let head = new TreeNode(-1);

    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (head.val===-1) {
            head = root;
            newRoot = root;
        } else {
            newRoot.left = null;
            newRoot.right = root;
            newRoot = root;
        }
        
        console.log(root.val);
        root = root.right;
    }
    return head;
};
// @lc code=end

