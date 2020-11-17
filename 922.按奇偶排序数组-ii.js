/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    // my way 两次遍历
    // let len = A.length;
    // let odd = [], even = [];
    // for (let i = 0; i < len; i++){
    //     if (i % 2 !== A[i] % 2) {
    //         i % 2 == 0 ? odd.push(i) : even.push(i);
    //     }
    // }
    // for (let i = 0, len1 = odd.length; i < len1; i++){
    //     [A[odd[i]], A[even[i]]] = [A[even[i]], A[odd[i]]];
    // }
    // return A;
    // 一次遍历 双指针
    let len = A.length;
    let j = 1;
    for (let i = 0; i < len; i+=2){
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2
            }
            [A[i], A[j]] = [A[j], A[i]];
        }
    }
    return A;
};
// @lc code=end

