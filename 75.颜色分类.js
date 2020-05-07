/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // 计数排序
  let counts = new Array(3)
  nums.forEach((item) => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item] ++
  })
  let sorteIndex = 0
  counts.forEach((count, i) => {
    while(count > 0) {
      nums[sorteIndex] = i
      sorteIndex++
      count --
    }
  })
  return nums
};
// var sortColors = function(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let i = 0;
//   while(i <= right){
//       if(nums[i] === 0){
//           [nums[left],nums[i]] = [nums[i],nums[left]];
//           left++;
//           i++;
//       }
//       else if(nums[i] === 2){
//           [nums[right],nums[i]] = [nums[i],nums[right]];
//           right--;
//       }
//       else {
//           i++;
//       }
//   }
// };

// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/sort-colors/solution/75-yan-se-fen-lei-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

