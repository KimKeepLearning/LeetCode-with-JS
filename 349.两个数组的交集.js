/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 还是双指针法
    let i = 0, j = 0;
    let res = [];
    nums1.sort((a, b) => { return a - b; });
    nums2.sort((a, b) => { return a - b; });
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j])
            i++;
        else
            j++;
    }
    return Array.from(new Set(res));
};
// @lc code=end

