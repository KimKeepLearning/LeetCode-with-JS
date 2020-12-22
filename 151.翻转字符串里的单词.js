/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(" ");
    console.log(s);
    let res = [];
    s.forEach((element) => {
        // console.log(element);
        if (element) res.push(element);
    })
    // console.log(res);
    return res.reverse().join(" ")
};
// @lc code=end