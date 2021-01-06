/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // if (s.length === 1) return s;
    let len = s.length;
    let dp = new Array(len),
        maxLen = 1;
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(0);
        dp[i][i] = 1;
    }
    let res = s[0];
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1;
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    res = s.substring(i, j + 1);
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return res;
};
// @lc code=end