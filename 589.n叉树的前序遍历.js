/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    //递归
    // const result = [];
    // if (!root) return result;
    // return check(root, result);
    // 迭代（栈）
    if (!root) return [];
    let stack = [root];
    const result = [];
    while (stack.length) {
        root = stack.pop();
        result.push(root.val);
        for (var i = root.children.length - 1; i >= 0; i--){
            stack.push(root.children[i]);
        };
    }
    return result;
};
// var check = function (root, result) {
    
//     result.push(root.val);
//     let len = root.children.length;
//     for (var i = 0; i < len; i++) {
//         check(root.children[i], result);
//     }
//     return result;

// }
// @lc code=end

