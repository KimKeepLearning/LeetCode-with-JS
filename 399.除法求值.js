/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let map = new Map(),
        res = [];
    let visit = new Map();

    const dfs = (src, dst) => {
        if (src === dst) {
            return 1.0;
        }
        let adjs = map.get(src);

        for (let i = 0; i < adjs.length; i++) {
            let next = adjs[i];
            if (!visit.get(next[0])) {
                visit.set(next[0], true);

                let ret = dfs(next[0], dst);

                visit.set(next[0], false);

                if (ret != -1.0) {
                    return next[1] * ret;
                }
            }
        }
        return -1;
    }
    for (let i = 0; i < equations.length; i++) {
        let e = equations[i],
            v = values[i];

        if (!map.has(e[0])) {
            map.set(e[0], []);
            visit.set(e[0], false);
        }
        if (!map.has(e[1])) {
            map.set(e[1], []);
            visit.set(e[1], false);
        }
        let adj1 = map.get(e[0]),
            adj2 = map.get(e[1]);
        adj1.push([e[1], v]);
        adj2.push([e[0], 1 / v]);
    }
    for (let q of queries) {
        let n0 = q[0],
            n1 = q[1];
        if (map.has(n0) && map.has(n1)) {
            visit.set(n0, true);
            res.push(dfs(n0, n1));
            visit.set(n0, false);
        } else {
            res.push(-1.0);
        }
    }
    return res;
};
// @lc code=end