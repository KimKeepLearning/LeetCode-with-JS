/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let res = new Array(n);
    res[0] = 1;
    let pt2 = 0, pt3 = 0, pt5 = 0;
    for (let i = 1; i < n; i++){
        res[i] = Math.min(res[pt2] * 2, res[pt3] * 3, res[pt5] * 5);
        if (res[i] === res[pt2] * 2) {
            pt2++;
        }
        if (res[i] === res[pt3] * 3) {
            pt3++;
        }
        if (res[i] === res[pt5] * 5) {
            pt5++;
        }
    }
    return res[n - 1];
};
// @lc code=end

