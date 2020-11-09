/*
 * @lc app=leetcode.cn id=1237 lang=javascript
 *
 * [1237] 找出给定方程的正整数解
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    // 二分查找，固定一个（遍历），还有一个二分
    // 缺陷，x和y的单调性只用了一个

    // let result = [];
    // for (var i = 1; i <= 1000; i++){
    //     let left = 1, right = 1000;
    //     while (left <= right) {
    //         let mid = Math.floor((left + right) / 2);
    //         let f = customfunction.f(i, mid);
    //         if (f === z) {
    //             result.push([i, mid]);
    //             break;
    //         } else if (f < z) {
    //             left = mid + 1;
    //         } else {
    //             right = mid - 1;
    //         }
    //     }
    // }
    // return result;

    // 双指针法
    let x = 1, y = 1000;
    let result = [];
    while (x <= 1000 && y >= 1) {
        let f = customfunction.f(x, y);
        if (f < z) {
            x++;
        } else if (f > z) {
            y--;
        } else {
            result.push([x, y]);
            x++;
            y--;
        }
    }
    return result
};
// @lc code=end

