/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 自己的解法，有点复杂
    // if (nums.length === 0) return 0;
    // let low = 0, high = nums.length - 1;
    // if (target > nums[high]) return high + 1;
    // if (target < nums[low]) return 0;
    // while (low <= high) {
    //     let mid = Math.floor((low + high) / 2);
    //     if (target === nums[mid]) return mid;
    //     if (target < nums[mid]) high = mid - 1;
    //     if (target > nums[mid]) low = mid + 1;
    //     if (target < nums[mid] && target > nums[mid - 1]) return mid ;
    // }

    // 比较好的解法
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return low;

};
// @lc code=end

