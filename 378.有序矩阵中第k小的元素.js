/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    
    // 我的暴力算法 ，利用空一维数组排序
    // let array = [];
    // let len = matrix.length;
    // for (let i = 0; i < len; i++){
    //     for (let j = 0; j < len; j++){
    //         array.push(matrix[i][j]);
    //     }
    // }
    // array.sort((a, b) => { return a - b; });
    // return array[k - 1];

    // 二分查找 
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    var countInMatrix = (matrix, midVal) => {
        let row = 0, col = n - 1;
        let count = 0;

        while (row < n && col >= 0) {
            if (midVal >= matrix[row][col]) {
                count += col + 1;
                row++;
            } else {
                col--;
            }
        }
        return count;
    }


    while (low <= high) {
        let midVal = Math.floor((low + high) / 2);
        let count = countInMatrix(matrix, midVal);
        console.log(count);
        if (count < k) {
            low = midVal + 1;
        } else {
            high = midVal - 1;
        }
    }
    return low;
};


// @lc code=end

