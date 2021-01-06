/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    //双指针
    let left = 0, right = left;
    let len = s.length, res = [],tmpLen = 0;
    while(right<len){
        if(s[left]===s[right]) {
            right++;
            tmpLen++;
            if(right >= len && tmpLen >=3) res.push([left, right-1])
        } else {
            if(tmpLen>=3){
                res.push([left, right-1]);
            }
            tmpLen = 0;
            left = right;
            right = left;
        }

    }
    return res;
};
// @lc code=end

