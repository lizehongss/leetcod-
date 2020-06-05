/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 function quickSort(arr,left, right) {
  if (left < right) {
    var pivot = right
    var partitonIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitonIndex - 1 < left ? left : partitonIndex - 1)
    quickSort(arr, partitonIndex + 1 > right ? right : partitonIndex + 1, right)
  }

 }
 function partition(arr, sign, start, end) {
 let startIndex = start
 for(let  i = start; i < end; i++) {
   if(arr[i] < arr[sign]) {
     swap (arr, i, startIndex)
     startIndex ++
   }
 }
 swap(arr, startIndex, sign)
 return startIndex
}
 function swap (arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
let result = []
 // 排序
 quickSort(nums, 0, nums.length - 1)
 if (nums.length <3) return []
 for(let i = 0; i<nums.length; i++) {
  if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
  if(i > 0 && nums[i] == nums[i-1]) continue; 
   let L = i + 1
   let R = nums.length -1
   while(L<R) {
     if (nums[i] + nums[L] +nums[R] === 0) {
       result.push([nums[i], nums[L], nums[R]])
       while(L<R&&nums[L] === nums[L+1]) {
         L=L+1
       }
       while(L<R && nums[R] === nums[R-1]) {
         R=R-1
       }
       L = L+1
       R = R-1
     } else if (nums[i] + nums[L] +nums[R] > 0) {
       R = R-1
     } else {
       L = L+1
     }
   }
 }
 return result
};
// @lc code=end

