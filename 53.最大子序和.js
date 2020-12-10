/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // 传统的动态规划
    // let dp = new Array(nums.length).fill(0);
    // let n = nums.length;

    // dp[0] = nums[0];
    // for (let i = 1; i < n; i++){
    //     dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    // }

    // let res = -Infinity;
    // for (let i = 0; i < n; i++){
    //     res = Math.max(res, dp[i]);
    // }
    // return res;

    /**
     * dp[i] 只和 dp[i-1] 有关，可压缩空间
     */
    // let dp = new Array(nums.length).fill(0);
    let n = nums.length;
    if (n === 0) return 0;
    let dp_0 = nums[0], dp_1 = 0, res = dp_0;
    for (let i = 1; i < n; i++){
        dp_1 = Math.max(nums[i], dp_0 + nums[i]);
        dp_0 = dp_1;
        res = Math.max(res, dp_1);
    }
    return res;

};
// @lc code=end

