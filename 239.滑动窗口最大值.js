/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let queArray = new Array(k)
  for(let i = 0 ; i < k; i++) {
    queArray[i] = nums[i]
  }
  let max = []
  max.push(Math.max.apply(this, queArray))
  for(let i = k; i<nums.length; i++) {
    queArray.shift()
    queArray.push(nums[i])
    max.push(Math.max.apply(this, queArray))
  }
  return max
};
// @lc code=end

