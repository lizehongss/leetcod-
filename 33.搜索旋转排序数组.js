/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1
  let low = 0
  let hight = nums.length - 1
  while (low <=hight) {
    let mid = Math.floor((low+hight)/2)
    if(nums[mid] === target) return mid
    // 左边有序
    if(nums[mid]>= nums[low]) {
      // target在其中
      if (target >= nums[low] && target<= nums[mid]) {
        hight = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (target >= nums[mid] && target<=nums[hight]) {
        low = mid + 1
      } else {
        hight = mid-1
      }
    }
  }
  return -1
};
// @lc code=end

