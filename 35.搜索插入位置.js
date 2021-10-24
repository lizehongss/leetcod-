/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0 ; i< nums.length; i++) {
        if (target === nums[i]) return i
    }
    let j = nums.length -1
    for (; j>=0; j--){
        if (nums[j] > target) {
            nums[j+1] = nums[j]
        } else {
            break
        }
    }
    return j + 1

};
// var searchInsert = function(nums, target) {
//     const n = nums.length;
//     let left = 0, right = n - 1, ans = n;
//     while (left <= right) {
//         let mid = ((right - left) >> 1) + left;
//         if (target <= nums[mid]) {
//             ans = mid;
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/search-insert-position/solution/sou-suo-cha-ru-wei-zhi-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end

