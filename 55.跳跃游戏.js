/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true
  let max = 0
  let n  = nums.length -1
  for(let i=0;i < n; i++) {
    if (max < i) return false
    if(i + nums[i] > max) {
      max = i + nums[i]
    }
    if ((max>n) || (max ===n)) {
      return true
    }
  }
  return false
};
// @lc code=end

