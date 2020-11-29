/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    // 虽然没看到呢，但是感觉用贪心算法 对了！！！但和官解还是有一点差距的
    // if (A.length === 3 && isTriangle(A)) return A.reduce((a, b) => { return a + b; });
    // A.sort((a, b) => { return b - a; });
    
    // let left = 0, len = A.length;
    // while (left + 3 <= len) {
    //     let tmp = A.slice(left, left + 3);
    //     if (isTriangle(tmp)) return tmp.reduce((a, b) => { return a + b; });
    //     else left++;
    // }
    // return 0;

    // 官解的贪心更加彻底
    if (A.length === 3 && isTriangle(A)) return A.reduce((a, b) => { return a + b; });
    A.sort((a, b) => { return b - a; });

    let left = 0, len = A.length;
    while (left + 3 <= len) {
        if (A[left + 2] + A[left + 1] > A[left]) return A[left + 2] + A[left + 1] + A[left];
        else left++;
    }
    return 0;
};

var isTriangle = function (arr) {
    if (arr[0] + arr[1] > arr[2] && arr[0] + arr[2] > arr[1] && arr[1] + arr[2] > arr[0]) return true;
    else return false;
}
// @lc code=end

