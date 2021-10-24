/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index
    for(let i = 0 ; i< nums.length; i++) {
        if (nums[i] === undefined) {
            index = i
            break
        }
        if(nums[i] === val) {
            for(let j=i; j<nums.length; j++) {
                nums[j] = nums[j+1]
            }
            i = i-1
        }
    }
    console.log(nums)
    return index
};
// var removeElement = function(nums, val) {
//     const n = nums.length;
//     let left = 0;
//     for (let right = 0; right < n; right++) {
//         if (nums[right] !== val) {
//             nums[left] = nums[right];
//             left++;
//         }
//     }
//     return left;
// }
// @lc code=end

