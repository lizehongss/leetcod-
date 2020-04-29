/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1,-1]
  let low = 0
  let hight = nums.length - 1
  let resultArray=[-1, -1]
  while(low <= hight) {
    let mid = Math.floor((low+hight)/2)
    if(target < nums[mid]) {
      hight = mid-1
    } else if (target > nums[mid]) {
      low = mid +1
    } else {
      if(mid === 0 || nums[mid-1]!= target ) {
        resultArray[0] = mid
        break
      } else {
        hight = mid-1
      }
    }
  }
  low = 0
  hight = nums.length - 1
  while(low <= hight) {
    let mid = Math.floor((low+hight)/2)
    if (target < nums[mid]) {
      hight = mid - 1
    } else if (target > nums[mid]) {
      low = mid + 1
    } else {
      if(mid === nums.length - 1 || nums[mid+1]!= target) {
        resultArray[1] = mid
        break
      } else {
        low = mid + 1
      }
    }
  }
  return  resultArray
};
// @lc code=end

