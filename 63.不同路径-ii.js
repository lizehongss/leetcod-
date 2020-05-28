/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
      // // 行
      // var n = obstacleGrid.length;
      // // 列
      // var m = obstacleGrid[0].length;
      // // 初始化
      // var dp = new Array(n);
      // for(var i = 0;i<n;i++){
      //     dp[i] = new Array(m).fill(0);
      // }
      // dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
      // // 如果起点就是障碍物
      // if(dp[0][0] == 0){
      //     return 0 ;
      // }
      // // 第一行
      // for(var j = 1;j < m;j++){
      //     if(obstacleGrid[0][j] != 1){
      //         dp[0][j] = dp[0][j-1];
      //     }
      // }
      // // 第一列
      // for(var r = 1;r < n;r++){
      //     if(obstacleGrid[r][0] != 1){
      //         dp[r][0] = dp[r-1][0];
      //     }
      // }
      // // 动态递推
      // for(var i = 1;i < n;i++){
      //     for(var r = 1;r < m;r++){
      //         if(obstacleGrid[i][r] != 1){
      //             dp[i][r] = dp[i-1][r] +dp[i][r-1];
      //         }
      //     }
      // }
      // return dp[n-1][m-1];
  let n = obstacleGrid.length
  let m = obstacleGrid[0].length
  let dp = new Array(n)
  for (let i = 0; i<n; i++) {
    dp[i] = new Array(m).fill(0)
  }
  dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
  // 如果起点就是障碍物
  if(dp[0][0] == 0){
      return 0 ;
  }
  for(let j = 1; j<m; j++) {
    if (obstacleGrid[0][j] != 1) {
      dp[0][j] = dp[0][j-1]
    }
  }
  for(let r = 1; r<n; r++) {
    if (obstacleGrid[r][0] != 1) {
      dp[r][0] = dp[r-1][0]
    }
  }
  for (let i= 1; i<n; i++) {
    for(let r=1; r<m; j++) {
      if(obstacleGrid[i][r] != 1) {
        dp[i][r] = dp[i-1][r] + dp[i][r-1]
      }
    }
  }
  return dp[n-1][m-1];
};
// @lc code=end

