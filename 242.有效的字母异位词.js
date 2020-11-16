/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 字符串排序——先转数组再排序
    // return s.split('').sort().join('') === t.split('').sort().join('');
    if (s.length !== t.length) return false;
    let hashmap = new Map;

    // for (let i = 0, len = s.length; i < len; i++){
    //     const curValue = hashmap.get(s[i]);
    //     if (!curValue) {
    //         hashmap.set(s[i], 1);
    //     } else {
    //         hashmap.set(s[i], curValue + 1);
    //     }
    // }
    s.split('').forEach(item => {
        const curValue = hashmap.get(item);
        if (!curValue) {
            hashmap.set(item, 1);
        } else {
            hashmap.set(item, curValue + 1);
        }
    })


    // for (let i = 0, len = t.length; i < len; i++){
    //     const hasitem = hashmap.has(t[i]);
    //     // console.log(item);
    //     if (hasitem) {
    //         hashmap.set(t[i], hashmap.get(t[i]) - 1);
    //     } else {
    //         return false;
    //     }
    // }
    // // console.log(hashmap);
    t.split('').forEach(item => {
        if (hashmap.has(item)) {
            hashmap.set(item, hashmap.get(item) - 1);
        } else {
            return false;
        }
    })


    return [...hashmap.values()].every(item => item === 0);

};
// @lc code=end

