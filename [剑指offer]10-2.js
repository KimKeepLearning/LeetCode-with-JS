/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if (n===0) return 1;
    if (n===1) return 1;

    let f0 = 1, f1 = 1, res;
    for (let i = 2; i <= n ;i++){
        res = (f0 + f1) % 1000000007;
        f0 = f1;
        f1 = res;
    }
    return res;

};