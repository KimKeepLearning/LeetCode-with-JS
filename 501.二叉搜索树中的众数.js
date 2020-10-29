/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
    // 姑娘，这考的就是个中序遍历啊！
    if (!root) return [];
    let base = 0, count = 0, maxCount = 0;
    let answer = [];
    const dfs = (o) => {
        if (!o) return;
        dfs(o.left);
        // 中序遍历
        if (base === o.val) {
            count++;
        } else {
            base = o.val;
            count = 1;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
        dfs(o.right);
    }

    dfs(root);
    return answer;
};


// @lc code=end

