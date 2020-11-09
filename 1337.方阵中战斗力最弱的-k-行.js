/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 方阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let nums = [];
    for (let i = 0, len1 = mat.length; i < len1; i++){
        let num = 0;
        for (let j = 0, len2 = mat[0].length; j < len2; j++){
            if (mat[i][j] === 1) num++;
        }
        nums.push([num, i]);
    }
    nums.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    // console.log(nums);
    let res = [];
    for (let i = 0; i < k; i++){
        res.push(nums[i][1]);
    }
    return res;
    
};
// @lc code=end

