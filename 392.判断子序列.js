/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // 解出来了，但是不知道是贪心算法
    let index1 = 0, index2 = 0;
    while (index1 < s.length && index2 < t.length) {
        if (s[index1] === t[index2]) {
            index1++;
            index2++;
        } else {
            index2++;
        }
    }
    if (index1 >= s.length) return true;
    else return false;
};
// @lc code=end

