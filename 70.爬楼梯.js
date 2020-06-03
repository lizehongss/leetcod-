/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = []
  result[1] = 1
  result[2] = 2
  if (n === 2 || n=== 1) {
    return result[n]
  }
  // 到达n阶的方法有f(n-1)+f(n-2)
  for(let i = 3 ; i<= n; i++) {
    result[i] = result[i-1] + result[i-2]
  }
  return result[n]
};
// @lc code=end

