/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // 差不多了，每次都在细节上把握不准
    let length = citations.length;
    let low = 0, high = length - 1;
    
    let res = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let times = length - mid;
        if (times <= citations[mid]) {
            res = length - mid;
            high = mid - 1;
        } else if (times > citations[mid]) {
            low = mid + 1;
        }
    }
    return res;
};
// @lc code=end

