/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    const sum = (num) => {
        return num * (num + 1) / 2;
    }
    let left = 1, right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = sum(mid);
        if (n === val) {
            return mid;
        } else if (n < val) {
            right = mid - 1;
        } else if (n > val) {
            left = mid + 1;
        }
    }
    return right;
};
// @lc code=end

