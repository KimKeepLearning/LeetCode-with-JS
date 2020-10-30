/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var res = 0;
    for (var i = 0; i < grid.length; i++){
        for (var j = 0; j < grid[i].length; j++){
            if (grid[i][j] === 1) {
                res += computed(grid, i, j);
            }
        }
    }
    return res;
};

var computed = function(grid, i, j) {
    let count = 0;
    
    if (i - 1 < 0) {
        count++;
    } else if (grid[i - 1][j] === 0) {
        count++;
    }

    if (j - 1 < 0) {
        count++;
    } else if (grid[i][j - 1] === 0) {
        count++;
    }

    if (i + 1 >= grid.length) {
        count++;
    } else if (grid[i + 1][j] === 0) {
        count++;
    }

    if (j + 1 >= grid[i].length) {
        count++;
    } else if (grid[i][j + 1] === 0) {
        count++;
    }

    
    return count;
}
// @lc code=end

