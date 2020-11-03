/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;
    if (s.length % 2 == 1) return false;
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (var i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
        else if (map[stack.pop()] !== s[i]) {
            return false;
        }
    }
    if (stack.length) return false;
    return true;
};
// @lc code=end

