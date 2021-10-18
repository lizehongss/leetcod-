/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0 ; i< nums.length; i++) {
        if (nums.includes(target - nums[i])) {
            let findIndex = nums.findIndex(it => it === (target - nums[i]))
            if (findIndex != i )return [i, findIndex]
        }
    }
};
// @lc code=end

