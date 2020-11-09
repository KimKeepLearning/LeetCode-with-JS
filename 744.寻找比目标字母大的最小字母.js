/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let low = 0, high = letters.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (letters[mid] <= target) low = mid + 1;
        else {
            high = mid - 1;
        }
    }
    return letters[low % letters.length];
};
// @lc code=end

