/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums = nums.sort((a, b) => {
        return a -b 
    })
    let result  = []
    let path = []
    function setValue (used) {
        if(path.length === nums.length) {
            result.push([...path])
        }
        for(let i = 0 ; i < nums.length; i++) {
            if (i> 0 && nums[i] == nums[i-1] && !used[i-1]) continue
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            setValue(used)
            used[i] = false
            path.pop()
        }
    }
    setValue([], 0)
    return result
};
// @lc code=end

