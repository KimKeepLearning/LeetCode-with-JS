/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    let num = 0;
    let set = [];

    for (let i = 0; i < nums.length; i++){
        num = num ^ nums[i];
    }
    return num;
};
// @lc code=end

