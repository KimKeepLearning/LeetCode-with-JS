/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    let map = new Map();

    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i]) && map.get(nums[i]) === 1)
            return nums[i];
    }
};
// @lc code=end

