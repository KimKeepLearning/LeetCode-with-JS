/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 动态规划——labuladong
    let dp = new Array(nums.length).fill(1);
    let len = nums.length;

    for (let i = 0; i < len; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    let res = 0;
    for (let i = 0; i < len; i++){
        res = Math.max(res, dp[i]);
    }

    return res;

};
// @lc code=end

