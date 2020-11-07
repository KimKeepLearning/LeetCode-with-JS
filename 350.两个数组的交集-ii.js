/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 哈希表
    // const map = {};
    // const res = [];
    // for (let i = 0, len = nums1.length; i < len; i++){
    //     if (map[nums1[i]]) map[nums1[i]]++;
    //     else
    //         map[nums1[i]] = 1;
    // }
    // for (let i = 0, len = nums2.length; i < len; i++){
    //     if (map[nums2[i]]) {
    //         res.push(nums2[i]);
    //         map[nums2[i]]--;
    //     }
    // }
    // return res;
    // 双指针法
    nums1 = nums1.sort((a, b) => {
        return a - b;
    });
    nums2 = nums2.sort((a, b) => {
        return a - b;
    });
    let i = 0, j = 0;
    let len1 = nums1.length, len2 = nums2.length;
    const res = [];
    while (i < len1 && j < len2) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++; j++;
        }
        else if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    return res;
};
// @lc code=end

