/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid[0].length
  let n = grid.length
  let result = new Array(n)
  let sum = 0
  for(let j = 0; j < n; j++) {
    result[j] = new Array(m)
    sum += grid[j][0]
    result[j][0] = sum
  }
  sum = 0
  for(let i = 0; i < m; i++){
    sum += grid[0][i] 
    result[0][i] = sum
  }
  for(let i = 1; i < n; i++ ) {
    for(let j = 1; j < m; j++) {
      result[i][j] = grid[i][j] + Math.min(result[i-1][j], result[i][j-1])
    }
  }
  return result [n-1][m-1]
};
// @lc code=end

