/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 1, high = num;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val === num) return true;
        else if (val < num) low = mid + 1;
        else high = mid - 1;
    }
    return false;
};
// @lc code=end

