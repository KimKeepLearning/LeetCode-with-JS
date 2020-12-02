/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var row = board.length;
    var col = board[0].length;

    var dfs = (i,j,index) => {
        if (i < 0 || i >= row || j < 0 || j > col || board[i][j] !== word[index]) return false; //no
        
        if (index === word.length - 1) return true;

        var tmp = board[i][j];
        board[i][j] = '-';
        var res =  dfs(i - 1,j,index + 1) || dfs(i + 1,j,index + 1) || dfs(i,j - 1,index + 1) || dfs(i,j + 1,index + 1);
        board[i][j] = tmp;
        return res;
    }

    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            if (dfs(i, j,0)) return true;
        }
    }
    return false;

};

// @lc code=end

