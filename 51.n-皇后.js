/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    
    /**
     * let board = new Array(n).fill(new Array(n).fill("."))
     * 不能这么写，相关位置的元素会同步改变
     */


    let board = new Array(n);
    for (let i = 0; i < n; i++){
        board[i] = new Array(n).fill('.');
    }
    console.log(board);
    let res = [];

    var isValid = (row, col) => {
         let n = board.length;

        for (let j = 0; j < n; j++){
            if (board[row][j] === "Q") return false;
        }

        for (let i = 0; i < row; i++){
            if (board[i][col] === "Q") return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++){
            if (board[i][j] === "Q") return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
            if (board[i][j] === "Q") return false;
        }

        return true;
    }

    let backtrace = (row) => {
        if (row === n) {
            let tmp = board.slice();
            for (let i = 0; i < n; i++){
                tmp[i] = tmp[i].join("");
            }
            res.push(tmp);
            return;
        }

        for (let col = 0; col < n; col++){
            if (!isValid(row, col)) continue;
            board[row][col] = "Q";
            // console.log(board);
            backtrace(row + 1);
            board[row][col] = ".";
        }
    }
    backtrace(0);
    return res;
};

// @lc code=end

