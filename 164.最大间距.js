/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function swap (arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function partition (arr, pivot, left, right) {
  var startIndex = left
  for (var i= left; i< right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i , startIndex)
      startIndex ++ 
    }
  }
  swap (arr, startIndex, pivot)
  return startIndex
}

function quick (arr, left, right) {
  if (left < right) {
    var pivot = right
    var partitonIndex = partition(arr,pivot, left, right)
    quick(arr, left, partitonIndex - 1 < left ? left : partitonIndex - 1)
    quick(arr, partitonIndex + 1 > right ? right : partitonIndex + 1, right)
  }
}
var maximumGap = function(nums) {
  if(nums.length < 2) return 0
  quick(nums, 0 , nums.length - 1)
  let max = nums[1] -nums[0]
  for(let i = 1; i< nums.length; i++) {
    if(!nums[i+1]) break;
    if ((nums[i+1] -nums[i]) > max) {
      max = nums[i+1] -nums[i]
    }
  }
  return max
};
// @lc code=end

