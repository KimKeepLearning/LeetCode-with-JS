/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length, n = grid[0].length;
    let res = 0;
    for (let i = 0; i < m; i++){
        let low = 0, high = n - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (grid[i][mid] >= 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        console.log(low);
        res += (n - low);
    }
    return res;
};
// @lc code=end

