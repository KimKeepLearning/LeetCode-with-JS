/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    console.log(printCircle(matrix,3,3));
};

var printCircle = function (matrix,row,col) {
    let res = [];
    let i = 0,j=0;
    while (j++ < col) {
        res.push(matrix[0][j]);
    }
    console.log(res);
    while (i + 1< row) {
        res.push(matrix[i + 1][col - 1]);
        i++;
    }
    j--;
    while (j-1 >= 0) {
        res.push(matrix[row - 1][j - 1]);
        j--;
    }
    while (i - 1 >= 0) {
        res.push(matrix[i - 1][0]);
    }
    return res;
}
// @lc code=end

