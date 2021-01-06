function maxA(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1; // 只按A
        for (let j = 2; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1));
        }
    }
    return dp[n];
}