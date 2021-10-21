/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index
    for(let i = 0 ; i< nums.length; i++) {
        if (nums[i] === undefined) {
            index = i
            break
        } 
        console.log(nums[i], nums[i+1])
        if (nums[i] === nums[i+1]) {
            for(let j = i; j < nums.length; j++) {
                nums[j] = nums[j+1]
            }
            i = i-1
        }
    }
    console.log(index)
    return index
};
// 使用双指针
// var removeDuplicates = function(nums) {
//     const n = nums.length;
//     if (n === 0) {
//         return 0;
//     }
//     let fast = 1, slow = 1;
//     while (fast < n) {
//         if (nums[fast] !== nums[fast - 1]) {
//             nums[slow] = nums[fast];
//             ++slow;
//         }
//         ++fast;
//     }
//     return slow;
// };

// @lc code=end

