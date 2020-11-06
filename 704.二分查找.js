/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 二分查找
    if (!nums.length) return -1;
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
};
// @lc code=end

