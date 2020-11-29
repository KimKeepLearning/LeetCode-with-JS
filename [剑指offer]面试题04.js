/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) return false;
    let col = matrix[0].length - 1, row = 0, len = matrix.length;
    while (col>=0 && row < len){
        if (matrix[row][col] === target) {
            return true;
        } else if(matrix[row][col] > target){
            col--;
        } else row++;
    }
    return false;
};