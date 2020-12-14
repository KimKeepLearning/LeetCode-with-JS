/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0];
    let times = 1, len = nums.length;
    for (let i = 1; i < len ;i++){
       if (times === 0) {
           res = nums[i];
           times = 1;
       }
       else if (nums[i]===res) {
           times ++;
       } else {
           times--;
       }
   }
   return res;
};
// @lc code=end

