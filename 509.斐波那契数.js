/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    // 普通递归，重复计算严重
    // if (N === 0) return 0;
    // if (N === 1) return 1;
    // return fib(N - 1) + fib(N - 2);
    // 从下往上计算 剑指offer题解
    /**
     * 为什么对1000000007取模：它是最小的十位质数，可以保证值永远在int的范围内。
     */
    // let f0 = 0 ,f1 = 1, result;
    // if (N === 0) return f0;
    // if (N === 1) return f1;
    // for (let i = 2; i <= N; i++){
    //     result = (f0 + f1) %  1000000007;
    //     f0 = f1;
    //     f1 = result;
    // }
    // return result;
    if(N===0) return 0;
    if(N===1) return 1;
    let f0 = 0, f1 = 1;
    for (let i = 2; i <= N;i++ ){
        let tmp = f0 + f1;
        f0 = f1;
        f1 = tmp;
    }
    return f1;

};
// @lc code=end

