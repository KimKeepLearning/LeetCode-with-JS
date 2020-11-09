/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 这个和我刚才做的1237不是差不多？？？？
    // 双指针法
    let x = 0, y = numbers.length - 1;
    while (x < numbers.length && y >= 0) {
        let val = numbers[x] + numbers[y];
        if (val === target) {
            return [x + 1, y + 1];
        } else if (val < target) {
            x++;
        } else {
            y--;
        }
    }
};
// @lc code=end

