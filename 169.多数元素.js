/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = []
  let max = 0
  let num = 0
  for(let i = 0; i < nums.length; i++) {
    if(!result[nums[i]]) {
      result[nums[i]] = 1
    } else {
      result[nums[i]] +=1
    }
    if (result[nums[i]] > max) {
      max = result[nums[i]]
      num = nums[i]
    }
  }
  return num
};
// @lc code=end

