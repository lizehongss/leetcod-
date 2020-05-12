/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i = 0; i< nums.length; i++) {
    for(let j = i+1; j<nums.length; j++) {
      let a = Math.abs(nums[i]- nums[j])
      let b = Math.abs(i-j)
      if ((a<t || a === t)&&(b<k || b=== k)) {
        return true
      }
    }
  }
  return false
};
// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//   // 解决js中 -0 === 0 为true的问题
//   function getId(x, w) {
//       return Math.floor(x / w)
//   }
//   if (t < 0) return false
//   const map = new Map()
//   const w = t + 1
//   for (let i = 0; i < nums.length; i++) {
//       const m = getId(nums[i] ,w)
//       if (map.has(m)) return true
//       else if (map.has(+m + 1) && Math.abs(map.get(+m + 1) - nums[i]) < w) return true
//       else if (map.has(+m - 1) && Math.abs(map.get(+m - 1) - nums[i]) < w) return true
//       map.set(m, nums[i])
//       if (i >= k) map.delete(getId(nums[i - k], w))
//   }
//   return false
// };

// 作者：indomi
// 链接：https://leetcode-cn.com/problems/contains-duplicate-iii/solution/javascript-zhi-xing-yong-shi-68-ms-zai-suo-you-jav/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

