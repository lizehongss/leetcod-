/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // 最优解
  // 自己的解
  let commonArray = []
  nums1.forEach(it => {
    if(nums2.includes(it)){
      if(!commonArray.includes(it)){
        commonArray.push(it)
      }
    }
  })
  return commonArray
};
// @lc code=end

