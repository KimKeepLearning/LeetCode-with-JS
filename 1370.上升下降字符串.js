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
var sortString = function (s) {
    // 我的解法
    // s = Array.from(s);
    // let lastmin=undefined, lastmax=undefined;
    // var findmin = () => {
    //     // let temp1 = s;
    //     s.sort();
    //     let i = 0;
    //     if (lastmin === undefined) {
    //         lastmin = s[0];
    //         s.splice(0, 1);
    //         return lastmin;
    //     } else {
    //         while (s[i++] <= lastmin);
    //         i--;
    //         if (i < s.length) {
    //             lastmin = s[i];
    //             s.splice(i, 1);
    //             return lastmin;
    //         } else {
    //             return undefined;
    //         }
    //     }
        
    // }

    // var findmax = () => {
    //     // let temp2 = s;
    //     s.sort().reverse();
    //     let j = 0;
    //     if (lastmax === undefined) {
    //         lastmax = s[0];
    //         s.splice(0, 1);
    //         return lastmax;
    //     } else {
    //         while (s[j++] >= lastmax);
    //         j--;
    //         if (j < s.length) {
    //             lastmax = s[j];
    //             s.splice(j, 1);
    //             return lastmax;
    //         } else {
    //             return undefined;
    //         }
    //     }
    // }
    // let res = [];
    // while (s.length) {
    //     lastmin = undefined, lastmax = undefined;
        
    //     let tempres = findmin();
    //     while (tempres) {
    //         res.push(tempres);
    //         tempres = findmin();
    //     }
    //     tempres = findmax();
    //     while (tempres) {
    //         res.push(tempres);
    //         tempres = findmax();
    //     }
    // }
    // return res.join('');

    // 找最大最小不必要写一个函数哦
    s = s.split('').map(v => v.codePointAt());
    let res = [];
    while (s.length) {
        let min = -Infinity, max = Infinity;
    
        while (true) {
            min = Math.min(...s.filter(v => v > min));
            if (min === Infinity) break;
            res.push(min);
            s.splice(s.indexOf(min), 1);
        }
        
        while (true) {
            max = Math.max(...s.filter(v => v < max));
            if (max === -Infinity) break;
            res.push(max);
            s.splice(s.indexOf(max), 1)
        }
    }
    return res.map(v => String.fromCharCode(v)).join('');
};

// @lc code=end

