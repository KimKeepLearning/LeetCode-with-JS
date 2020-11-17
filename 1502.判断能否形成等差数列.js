/*
 * @lc app=leetcode.cn id=1502 lang=javascript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    // arr = insertSort(arr);
    
    arr.sort((a, b) => { return a - b; });
    let i = 1, len = arr.length;
    let num = arr[1] - arr[0];
    while (i < len && arr[i] - arr[i - 1] === num) i++;
    
    return i >= len ? true : false;
};

var insertSort = function (arr) {
    let len = arr.length;
    let prev, cur;
    for (let i = 1; i < len; i++) {
        prev = i - 1;
        cur = arr[i];
        while (prev >= 0 && arr[prev] > cur) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = cur;
    }
    return arr;
}

// @lc code=end

