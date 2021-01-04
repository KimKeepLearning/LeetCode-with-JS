/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let len = s.length;
    let dp = new Array(len);
    for(let i = 0; i < len;i++){
        dp[i] = new Array(len).fill(0);
    }
    for (let i = 0 ; i < len ;i++){
        dp[i][i] = 1;
    }
    for(let i = len - 2; i >=0 ;i--){
        for(let j = i + 1; j < len ;j++){
            if(s[i]===s[j]){
                dp[i][j] = dp[i+1][j-1]+2;
            } else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i+1][j]);
            }
        }
    }
    return dp[0][len-1];
};
// @lc code=end

