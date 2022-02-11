/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
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
    let height = nums.length -1
    while (low <= height) {
        let mid = Math.floor((low+height)/2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            height = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
};
// @lc code=end

