/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    if (n <= 0) return 0;
    if (n < 10) return 1;

    let height = Math.floor(n / 10), cur = n % 10, low = 0;
    let res = 0, digit = 1;

    while (height || cur) {
        if (cur === 0) {
            res += height * digit;
        } else if (cur === 1) {
            res += height * digit + low + 1;
        } else {
            res += (height + 1) * digit;
        }
        low += cur * digit;
        cur = height % 10;
        height = Math.floor(height / 10);
        digit *= 10;
    }
    return res;
};
// @lc code=end

