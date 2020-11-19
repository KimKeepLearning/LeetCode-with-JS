/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    s = s.split('');
    let flag = new Array(s.length).fill(0);
    let res = [], lastVal = '', lastVal2 = 'z' + 1;


    var findMin = function (s) {
        let temps = s.sort();
        let i = 0, len = temps.length;
        while (i < len) {
            if (temps[i] > lastVal && flag[i] === 0) {
                flag[i] = 1;
                lastVal = temps[i];
                return temps[i];
            } else i++;
        }
        return undefined;
    }

    var findMax = function (s) {
        let temps2 = s.sort().reverse();
        let i = 0, len2 = temps2.length;
        console.log(flag);
        while (i < len2) {
            if (temps2[i] < lastVal2 && flag[i] === 0) {
                flag[i] = 1;
                lastVal2 = temps2[i];
                return temps2[i];
            } else i++;
        }
        return undefined;
    }


    while (flag.includes(0)) {
        lastVal = '', lastVal2 = 'z' + 1;
        let temRes = findMin(s);
        // console.log(1, temRes);
        while (temRes) {
            res.push(temRes);
            temRes = findMin(s);
            // console.log(2, temRes);
        }
        temRes = findMax(s);
        console.log(3, temRes);
        while (temRes) {
            res.push(temRes);
            temRes = findMax(s);
            // console.log(4, temRes);
        }
    }
    // console.log(res);
    return res.join('');
};

// @lc code=end

