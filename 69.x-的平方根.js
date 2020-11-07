/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // 有良心的人不这么写
    // return Math.floor(Math.sqrt(x));

    // 二分查找法
    let low = 0, high = x;
    let res = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid <= x) {
            res = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return res;
};
// @lc code=end

