/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var n = nums.length
    // 将小于0的值置为n + 1
    // 若nums刚好为1，2，3,....n,则要返回n+1，所以要置nums[n+1]值为n+1
    for(var i = 0; i<=n+1; i++) {
      if(nums[i] <=0 || !nums[i]) nums[i] = n + 1
    }
    for (var i = 0; i<n; i++ ) {
      // 标记数值a出现过
      var a = Math.abs(nums[i])
      nums[a] = -Math.abs(nums[a])
    }
    for(var i = 1; i<=n+1; i++) {
      if(nums[i] > 0) return i
    }
};
// @lc code=end

