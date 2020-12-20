/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    //异或分组
    let num1 = 0;
    for (let i = 0; i < nums.length; i++){
        num1 = num1 ^ nums[i];
    }
    let count = 1;
    while ((num1 & count) === 0) {
        count *= 2;
    }
    let num2 = 0, num3 = 0;
    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        if ((num & count) === 0) {
            num2 = num2 ^ num;
        } else {
            num3 = num3 ^ num;
        }
    }
    return [num2, num3];

};
// @lc code=end

