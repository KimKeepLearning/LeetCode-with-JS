/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    // 我的方法：行列分别用两次二分查找
    // if (!matrix.length || !matrix[0].length) return false;
    // let row = matrix.length, col = matrix[0].length;
    // let lowi = 0, highi = row - 1;
    // let lowj = 0, highj = col - 1;
    // while (lowi <= highi) {
    //     let midRow = Math.floor((lowi + highi) / 2);
    //     // 定位到了这一行
    //     if (matrix[midRow][0] <= target && target <= matrix[midRow][col - 1]) {
    //         lowi = midRow;
    //         while (lowj <= highj) {
    //             let midCol = Math.floor((lowj + highj) / 2);
    //             if (matrix[lowi][midCol] === target) return true;
    //             else if (matrix[lowi][midCol] < target) lowj = midCol + 1;
    //             else highj = midCol - 1;
    //         }
    //         return false;
    //     }
    //     // 找一找在哪一行
    //     if (matrix[midRow][0] > target) highi = midRow - 1;
    //     if (matrix[midRow][col - 1] < target) lowi = midRow + 1;
        
    //     if (lowi < 0 || lowi >= row) return false;
    // }
    // return false;

    
    // 优化，列中不需要二分，用indexOf
    if (!matrix.length || !matrix[0].length) return false;
    let low = 0, high = matrix.length - 1, col  = matrix[0].length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (matrix[mid][0] <= target && target <= matrix[mid][col - 1]) {
            return matrix[mid].indexOf(target)===-1 ? false : true;
        } else if (matrix[mid][0] > target) high = mid - 1;
        else if (matrix[mid][col - 1] < target) low = mid + 1;
    }
    return false;
};
// @lc code=end

