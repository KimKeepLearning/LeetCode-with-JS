/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let f0 = 0 ,f1 = 1, result=0;
    if (n === 0) return f0;
    if (n === 1) return f1;
    for (let i = 2; i <= n; i++){
        result = (f0 + f1)%  1000000007;
        f0 = f1;

        f1 = result;
    }
    return result;
};