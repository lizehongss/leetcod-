/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n-1) + fib(n - 2)
};
// var fib = function(n) {
//     let dp = [0, 1]
//     for(let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     console.log(dp)
//     return dp[n]
// };
// @lc code=end

