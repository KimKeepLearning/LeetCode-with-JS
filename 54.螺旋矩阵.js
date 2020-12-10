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
    
    let res = [];
    if (!matrix.length) return [];
    let startx = 0, starty = 0, endx = matrix.length - 1, endy = matrix[0].length -1;
    while (startx <= endx && starty <= endy) {
        console.log(printCircle(matrix, startx, starty, endx, endy));
        res = res.concat(printCircle(matrix, startx, starty, endx, endy));
        startx++; starty++;
        endx--;endy--
    }

    return res;


};

var printCircle =  (matrix, startX, startY, endX, endY) => {
    let res = [];
    for (let j = startY; j <= endY; j++){
        res.push(matrix[startX][j]);
    }
    for (let i = startX + 1; i <= endX; i++){
        
        res.push(matrix[i][endY]);
    }
    for (let j = endY - 1; j >= startY && startX !== endX; j--){
        res.push(matrix[endX][j]);
    }
    for (let i = endX - 1; i > startX && startY !== endY; i--){
        res.push(matrix[i][startY]);
    }
    return res;
}
// @lc code=end

