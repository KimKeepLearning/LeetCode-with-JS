/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // 不瑞雪的解法
    // s.reverse();
    // 递归解法
    // let temp = s.shift();
    // if (temp) {
    //     reverseString(s);
    //     s.push(temp);
    // }
    // 双指针解法
    let x = 0, y = s.length - 1;
    while (x < y) {
        [s[x], s[y]] = [s[y], s[x]];
        x++; y--;
    }
};
// @lc code=end

