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
//   let tmp = {};
//   return nums1.filter((item) => {
//       if(!tmp[item] && nums2.includes(item)){
//           tmp[item] = true;
//           return nums2.includes(item)
//       }
//   })

// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/349-liang-ge-shu-zu-de-jiao-ji-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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

