/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let len1 = word1.length,
        len2 = word2.length;
    let dp = new Array(len1);
    for (let i = 0; i < len1 + 1; i++) {
        dp[i] = new Array(len2 + 1).fill(0);
        dp[i][0] = i;

    }
    for (let j = 0; j < len2 + 1; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    // console.log(dp);
    return dp[len1][len2];
};
// @lc code=end