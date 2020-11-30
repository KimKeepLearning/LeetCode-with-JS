/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;

    // 右移处理不了负数
    // while(n){
    //     if (n & 1) res++;
    //     n = n >> 1;
    // }

    // 相当于有一个指针从右开始一直左移
    // var flag =0b1;
    // while(flag){
    //     if (n & flag) res++;
    //     flag = flag << 1; 
    // }

    // 最绝的方法，要经过一定的运算才能找到的规律
    while(n){
        n = (n - 1) & n;
        res++;
    }
    


    return res;
};