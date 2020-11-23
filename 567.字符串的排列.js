/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let window = {}, need = {};
    [...s1].forEach(e => { need[e] ? need[e]++ : need[e] = 1 });
    let left = 0, right = 0, count = 0, nkLen = Object.keys(need).length;

    while (right < s2.length) {
        let c1 = s2[right];
        right++;

        if (need[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1;
            if (window[c1] === need[c1]) count++;
        }

        while (right - left >= s1.length) {
            if (count === nkLen) return true;
            let c2 = s2[left];
            left++;
            if (need[c2]) {
                if (window[c2] === need[c2]) count--;
                window[c2]--;
            }
        }
    }
    return false;
};
// @lc code=end

