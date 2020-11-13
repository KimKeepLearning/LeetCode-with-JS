/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // 没做出来
    let low = 0, high = arr.length = 1;
    let left = null, right = null;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            high = mid - 1;
        } else if (arr[mid] > x) high = mid - 1;
        else low = mid + 1;
    }
};
// @lc code=end

