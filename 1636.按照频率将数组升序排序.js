/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    // 先整个hashmmap
    let frequency = new Map();
    let res = [];
    nums.forEach((value) => {
        let num = frequency.get(value);
        if (!num) {
            frequency.set(value, 1);
        } else {
            frequency.set(value, num + 1);
        }
    });
    let arr = Array.from(frequency);
    arr.sort((a, b) => {
        return (a[1] - b[1] > 0) ? 1 : (a[1] - b[1]) == 0 ? (b[0] - a[0]) : -1;
    });
    
    arr.forEach((value, index, array) => {
        while (value[1]--) {
            res.push(value[0]);
        }
    });
    return res;
};
// @lc code=end

