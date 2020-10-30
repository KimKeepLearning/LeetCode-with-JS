/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
    // 字符串转数字
    // if (!root) return 0;
    // const dfs = (root, path) => {
    //     if (!root) return;
    //     path += root.val.toString();
    //     if (!root.left && !root.right) {
    //         path = parseInt(path);
    //         result += path;
    //     }
    //     dfs(root.left, path);
    //     dfs(root.right, path);
    // }
    // let path = "";
    // let result = 0;
    // dfs(root, path);
    // return result;

    // 直接用数字
    if (!root) return 0;
    const dfs = (root, num) => {
        if (!root) return;
        num = num * 10 + root.val;
        if (!root.left && !root.right) {
            result += num;
        }
        dfs(root.left, num);
        dfs(root.right, num);
    }
    let num = 0;
    let result = 0;
    dfs(root, num);
    return result;
};
// @lc code=end

