/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1, mid;
    while (low < high) {
        mid = Math.floor((low + high) / 2);

        if (nums[mid] < nums[high]) {
            high = mid;
        } else if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else if (nums[mid] === nums[high]) {
            high--;
        }
    }
    return nums[low];
    
};
// @lc code=end

