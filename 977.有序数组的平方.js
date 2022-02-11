/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left  = 0
    let right = nums.length - 1
    let arr = []
    let  k = nums.length - 1
    while(left <= right) {
        if (nums[left] * nums[left] > nums[right]*nums[right]){
            arr[k] = nums[left] * nums[left]
            left ++
        } else {
            arr[k] = nums[right] * nums[right]
            right --
        }
        k--
    }
    return arr
};
// @lc code=end

