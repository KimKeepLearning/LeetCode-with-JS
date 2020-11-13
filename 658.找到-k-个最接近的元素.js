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
    let low = 0, high = arr.length - 1;
    let res = [];
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            high = mid - 1;
        } else if (arr[mid] > x) high = mid - 1;
        else low = mid + 1;
    }
    let ans = low;
    let left = ans, right = ans;
    while (right - left - 1 < k) {
        if (left < 0) {
            right++;
            continue;
        }
        if (right >= arr.length) {
            left--;
            continue;
        }
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            left--;
        } else {
            right++;
        }
    }
    for (let i = left + 1; i < right; i++){
        res.push(arr[i]);
    }
    return res;
};
// @lc code=end

