/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var window = {}, need = {};
    [...p].forEach(e => { need[e] ? need[e]++ : need[e] = 1 });
    var count = 0, nklen = Object.keys(need).length, left = 0, right = 0;
    var res = [];
    // console.log(nklen, p.length);
    while (right < s.length) {
        let c1 = s[right];
        right++;

        if (need[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1;
            if (window[c1] === need[c1]) count++;
        }
        while (right - left >= p.length) {
            if (count === nklen) res.push(left);
            let c2 = s[left];
            left++;
            if (need[c2]) {
                if (window[c2] === need[c2]) count--;
                window[c2]--;
            }
        }

    }
    return res;
};
// @lc code=end

