/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let len = s.length;
    let dp = new Array(len);
    for (let i = 0; i < len ;i++){
        dp[i] = new Array(len).fill(0);
    }
    for (let i = len - 2; i>=0;i--){
        for(let j = i + 1; j < len;j++){
            if(s[i]===s[j]){
                dp[i][j] = dp[i+1][j-1];
            } else{
                dp[i][j] = Math.min(dp[i][j-1],dp[i+1][j]) + 1;
            }
        }
    }
    return dp[0][len-1];
};
// @lc code=end

