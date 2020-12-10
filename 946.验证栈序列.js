/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let popindex = 0, pushindex = 0;
    let pushlen = pushed.length;

    while (pushindex < pushlen) {
        stack.push(pushed[pushindex]);
        while (stack.length!==0 && stack[stack.length - 1] === popped[popindex]) {
            stack.pop();
            popindex++;
        }
        pushindex++;
    }

    return !stack.length;
};
// @lc code=end

