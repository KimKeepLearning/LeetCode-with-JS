/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, window = {};
    let max = 0;
    while (right < s.length) {
        let c1 = s[right];
        right++;
        
        window[c1] ? window[c1]++ : window[c1] = 1;
        // if (!window[c1]) {
        //     window[c1] = 1;
        // } else {
        //     window[c1]++;
        // }
        while (window[c1] > 1) {
            let c2 = s[left];
            left++;
            window[c2]--;
        }
        max = Math.max(max, right - left);
    }
    return max;
};
// @lc code=end

