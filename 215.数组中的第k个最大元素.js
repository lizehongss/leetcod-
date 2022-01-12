/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function quickSort(arr, left, right) {
        if (left < right) {
            var pivot = right
            var partitonIndex = partition(arr, pivot, left, right)
            quickSort(arr, left, partitonIndex - 1 < left ? left : partitonIndex - 1 )
            quickSort(arr, partitonIndex + 1 > right ? right : partitonIndex + 1 , right)
        }
    }
    function partition(arr, pivot, left, right) {
        var startIndex = left
        for(var i = left; i< right; i++) {
            if(arr[i] < arr[pivot]) {
                swap(arr, i, startIndex)
                startIndex++
            }
        }
      swap(arr, startIndex, pivot)
      return startIndex
    }
    function swap (arr, i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    quickSort(nums, 0, nums.length -1)
    return nums[ nums.length  - k]
};
// @lc code=end

