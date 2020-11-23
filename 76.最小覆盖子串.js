/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!s || !t) return "";
    // 滑动窗口思想
    let left = 0, right = 0;
    let window = {}, need = {};
    [...t].forEach(element => { need[element] ? need[element]++ : need[element] = 1 });
    let start = 0, len = Infinity, count = 0, nkLen = Object.keys(need).length;
    
    while (right < s.length) {
        let c1 = s[right];
        right++;

        if (need[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1;
            if (window[c1] === need[c1]) count++;
        }

        while (count === nkLen) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            let c2 = s[left];
            left++;
            if (need[c2]) {
                if (window[c2] === need[c2]) count--;
                window[c2]--;
            }
        }
    }
    return len === Infinity ? "" : s.substring(start, start + len);
};
// @lc code=end

