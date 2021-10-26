/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  function join(nums, i) {
      let lastNum = nums[i]
      if (lastNum != 9) {
        nums[i] = lastNum + 1
        return nums
      } else {
        nums[i] = 0
        if (i===0) {
            nums.unshift(1)
            return nums
        }
        return join(nums, i-1)
      }

  }
  return join(digits, digits.length-1)
};
// var plusOne = function(digits) {
//     const n = digits.length;
//     for (let i = n - 1; i >= 0; --i) {
//         if (digits[i] !== 9) {
//             ++digits[i];
//             for (let j = i + 1; j < n; ++j) {
//                 digits[j] = 0;
//             }
//             return digits;
//         }
//     }

//     // digits 中所有的元素均为 9
//     const ans = new Array(n + 1).fill(0);
//     ans[0] = 1;
//     return ans;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/plus-one/solution/jia-yi-by-leetcode-solution-2hor/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

