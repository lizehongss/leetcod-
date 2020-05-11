/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  if(nums.length === 0) return []
  let result = []
  for(let i = 0; i<nums.length; i++) {
    result.push(partition(nums, i, i+1, nums.length))
  }
  function partition (arr, pivot, left, right) {
    let startIndex = 0 
    for(let i = left; i< right; i++) {
      if (arr[i] < arr[pivot]) {
        startIndex++
      }
    }
    return startIndex
  }
  return result
};
// @lc code=end

