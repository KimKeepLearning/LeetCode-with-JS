/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    // 两个队列实现，
    // if (!root) return [];
    // let queue = [root];
    // let queue2 = [root];
    // let level = 0;
    // let res = [];
    // while (queue.length) {
    //     let len = queue.length;
    //     let num = [];
    //     level++;
    //     while (len--) {
    //         root = queue.shift();
    //         let root2 = queue2.shift();

    //         if (root.right) queue.push(root.right);
    //         if (root.left) queue.push(root.left);

    //         if (root2.left) queue2.push(root2.left);
    //         if (root2.right) queue2.push(root2.right);
            
    //         if (level % 2 == 0) { 
    //             num.push(root.val);
    //         } else {
    //             num.push(root2.val);
    //         }
    //     }
    //     res.push(num);
    // }
    // return res;
    

    // 一开始也是这个做法，就是脑袋没转过来
    if (!root) return [];
    let queue = [root];
    let level = 0;
    let res = [];
    while (queue.length) {
        let len = queue.length;
        let num = [];
        level++;
        while (len--) {
            if (level % 2 == 0) { 
                root = queue.pop();
                num.push(root.val);

                if (root.right) queue.unshift(root.right);
                if (root.left) queue.unshift(root.left);
                
            } else {
                root = queue.shift();
                num.push(root.val);

                if (root.left) queue.push(root.left);
                if (root.right) queue.push(root.right);
            }

                                                                                                   
        }
        res.push(num);
    }
    return res;

};
// @lc code=end

