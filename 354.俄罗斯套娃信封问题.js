/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    
    envelopes.sort((a, b) => { return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]; });
    console.log(envelopes);
    let dp = new Array(envelopes.length).fill(1);
    let n = envelopes.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++){
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++){
        res = Math.max(res, dp[i]);
    }

    return res;


};
// @lc code=end

